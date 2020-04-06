let game = new Game();
//let img;
function preload (){
   game.initialize();
  //img = loadImage("assets/Player Run.gif");
}

function setup() { 
   createCanvas(1920, 1080);
  game.setup();
   // image(img, 0, 0);
  } 
  
  function draw() { 
  // background(220);
  // image(img,0,0);
   frameRate(40);
   game.display();

  }