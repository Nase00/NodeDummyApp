var express = require('express');
var router = express.Router();

/* POST post page. */
router.post('/', function(req, res, next) {
  console.log(req.body.textfield)
});

module.exports = router;