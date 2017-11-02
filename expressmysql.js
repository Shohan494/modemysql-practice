var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();

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

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
  connection.query('SELECT * FROM employees', function(err, rows){
    res.render('employees', {employees : rows});
  });
});


app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));
