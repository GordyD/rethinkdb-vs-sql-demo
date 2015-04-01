var r = require('rethinkdb');
r
.connect( {host: 'localhost', port: 28015})
.then(function(conn){
  return createDb(conn)
  .then(createTable(conn))
  .then(insertData(conn))
  .then(function() {
    console.log('Complete!');
    return conn.close();
  })
})
.error(function(err) {
  console.log('Something went wrong!', err);
});


function createDb(conn) {
  console.log('Create database...');
  return r
    .dbCreate('dragonball')
    .run(conn);
}

function createTable(conn) {
  return function() {
    console.log('Create table...');
    return r
    .db('dragonball')
    .tableCreate('characters')
    .run(conn);
  }
}

function insertData(conn) {
  return function() {
    console.log('Insert data...');
    return r
    .db('dragonball')
    .table('characters')
    .insert([
      {name: 'Goku', species: ['Saiyan'], maxStrength: 1000000, created: r.now() },
      {name: 'Gohan', species: ['Human','Saiyan'], maxStrength: 700000, created: r.now() },
      {name: 'Vegata', species: ['Saiyan'], maxStrength: 900000, created: r.now() },
      {name: 'Piccolo', species: ['Nemek'], maxStrength: 800000, created: r.now() },
      {name: 'Android 16', maxStrength: 920000, created: r.now() },
      {name: 'Bulma', species: ['Human'], created: r.now() },
      {name: 'Trunks', species: ['Human','Saiyan'], maxStrength: 650000, created: r.now() }
    ])
    .run(conn);
  }
}