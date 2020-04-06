class Game {
    constructor(){
       // this.background = new Background();
    }
    initialize(){
        this.background = new Background();
    }
    display(){
        clear();
        this.background.display();
      //  this.player.display();
    }
    setup(){
       // this.player.setup();
    }
}