var pg = require('pg');
var conString = "postgres://vagrant:awesome@localhost/dragonball";

var groupQuery = 'SELECT c.*, array_agg(s.name) as species \
FROM characters c \
LEFT JOIN character_species cs ON c.id = cs.character_id \
LEFT JOIN species s ON cs.species_id = s.id \
GROUP BY c.id \
ORDER BY species';

pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query(groupQuery, function(err, result) {
    //call `done()` to release the client back to the pool
    done();

    if(err) {
      return console.error('error running query', err);
    }
    console.log(JSON.stringify(result.rows, null, 2));
    //output: 1
    client.end();
  });
});