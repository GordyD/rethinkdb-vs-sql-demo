var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'dragonball'
});

connection.connect();

var groupQuery = 'SELECT c.*, group_concat(s.name) as species \
FROM characters c \
LEFT JOIN character_species cs ON c.id = cs.character_id \
LEFT JOIN species s ON cs.species_id = s.id \
GROUP BY c.id \
ORDER BY species';

connection.query(groupQuery, function(err, rows, fields) {
  if (err) throw err;

  console.log(JSON.stringify(rows, null, 2));
});

connection.end();