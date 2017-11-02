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
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
  connection.query('SELECT * FROM employees', function(err, rows){
    res.render('index', {title: 'Express MySql Node App', rows: JSON.stringify(rows)});
  });
});

/*app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
*/

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));
