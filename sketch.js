var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var answer, database;

var form, player, game;

var allPlayers;

function setup(){
  canvas = createCanvas(600,600);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background ("yellow");
  
  if(playerCount === 2){ 
    game.update(1);
  }

   if(gameState === 1){ 
    clear(); 
    game.play();
   }

}
