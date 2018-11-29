var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'mariadb',
  port     :  3306,
  user     : 'root',
  password : 'password',
  database : 'lab_assistant'
});

/* GET home page. */
router.get('/:table', function(req, res, next) {
  let str = 'getting failed';
  
  console.log(req.params);
  console.log(req.query);
  
  const table = req.params.table;

  connection.query('select * from ' + table, function (error, results, fields) {
    res.json(JSON.stringify(results));
  });
});

module.exports = router;
