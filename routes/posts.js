var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
  res.render('posts', {
  	title: 'Atomic7 - Posts'
  });
});

/* POST post page. */
router.post('/', function(req, res, next) {
  console.log(req.body.textfield)
  res.redirect('/posts/' + req.body.textfield)
});

/* POST show page. */
router.get('/:id', function(req, res, next) {
	console.log(req.params)
  res.render('posts/show', {
  	title: 'Atomic7 - Show',
  	firstParam: req.params.id
  });
});

module.exports = router;