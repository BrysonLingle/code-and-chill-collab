const Game = require('../models/games');

 module.exports = {
    new: newGames
  };
  
  function newGames(req, res) {
    res.render('new', { title: "New Game", errorMsg: "" })
    console.log('HELP')
}
async function news(req, res) {
    res.render('games/new', {
      games: await Game.find()
    });
  }