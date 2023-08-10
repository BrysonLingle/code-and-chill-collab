var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views', { title: 'Express' });
});

router.get('/error', (req, res) => {
  res.render('error');
});


module.exports = router;