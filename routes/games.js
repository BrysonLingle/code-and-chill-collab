var express = require('express');
var router = express.Router();
const gamesCtrl = require(',,/controllers/games')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", { title: 'Express' });
  // res.send('hello')
});
router.get('/new', gamesCtrl.new)


module.exports = router;
