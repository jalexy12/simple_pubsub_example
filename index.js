const SportsGame = require("./modules/sports_game.js")
const BookieNotifier = require("./modules/bookie.js")
const TwitterNotifier = require("./modules/twitter.js")
const ScoreBoardUpdater = require("./modules/score_board.js")
const EspnNotifier = require("./modules/espn.js")

let game = new SportsGame();

let bookie = new BookieNotifier();
let twitter = new TwitterNotifier();
let board = new ScoreBoardUpdater();
let espn = new EspnNotifier();

game.addSubscriber(bookie);
game.addSubscriber(twitter);
game.addSubscriber(board);
game.addSubscriber(espn);

game.updatePoints();

