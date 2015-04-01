var r = require('rethinkdb');
r
.connect( {host: 'localhost', port: 28015, db: 'dragonball'})
.then(function(conn){
  r
  .table('characters')
  .group('species')
  .run(conn)
  .then(function(cursor) {
      return cursor.toArray()
      .then(function(result) {
          console.log(JSON.stringify(result, null, 2));
          return conn.close();
      });
  });
})
.error(function(err) {
  console.log('Something went wrong!', err);
});