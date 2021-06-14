var gameState,playerCount 
var playerIndex
var allPlayers
function setup()
{
  createCanvas(1200,800)
  database = firebase.database();
  form = new Form()
  player = new Player()
  game = new Game()

  game.start()
}

function draw(){
  background("Yellow");
  
    if(playerCount === 2)
    {
        game.play()
    }
}

