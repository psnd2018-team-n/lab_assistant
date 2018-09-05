var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'mariadb',
  port     : 3306,
  user     : 'root',
  passwod  : 'password',
  database : 'lab_assistant'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var str = 'test';

  connection.connect(function(err) {
    if (err) {
      return console.error('error connecting: ' + err.stack)
    } else {
      console.log('connected as id ' + connection.threadId)
    }
  });

  connection.query('select name from user', function (error, results, fields) {
    console.log(results[0]);
    str = results[0].name;
  });

  res.render('index', { title: str });

  connection.end();
});

module.exports = router;
