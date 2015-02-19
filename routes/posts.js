var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
  res.render('posts', {
  	title: 'Atomic7 - Posts',
  	subtitle: 'A dummy blog in Node.js'
  });
});

/* POST post page. */
router.post('/', function(req, res, next) {
  console.log(req.body.textfield)
});

module.exports = router;