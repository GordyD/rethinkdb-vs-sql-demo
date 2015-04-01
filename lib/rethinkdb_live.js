var r = require('rethinkdb');
r
.connect({host: 'localhost', port: 28015, db: 'dragonball'})
.then(function(conn) {
  r
  .table('characters')
  .filter(function(row) {
    return row('species').contains('Saiyan');
  })
  .changes()
  .run(conn, function(err, cursor) {
      cursor.each(console.log);
  });
})
.error(function(err) {
  console.log('Something went wrong!', err);
});