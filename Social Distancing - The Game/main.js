let game = new Game();

function preload (){
    game.initialize();
}

function setup() { 
    createCanvas(1920, 1080);
    //game.setup();
  } 
  
  function draw() { 
    //background(220);
   // frameRate(40);
   game.display();
   

  }