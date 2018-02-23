const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'insta'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL.');
  connection.query('CREATE DATABASE insta', (err, result) => {
    if (err) throw err;
    console.log('MySQL DB created.');
  });
});