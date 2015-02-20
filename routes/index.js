var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Atomic7',
  	subtitle: 'A dummy RESTful blog with Express.js and Node.js'
  });
});

module.exports = router;
