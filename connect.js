

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodecrud'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SELECT * FROM employees', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);

  rows.forEach( (row) => { 
  console.log(`${row.name} is in ${row.location}`); 
  });
});

const employee = { name: 'Winnie', location: 'Australia' };
connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});
