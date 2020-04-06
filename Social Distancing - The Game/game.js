class Game {
    constructor(){
       
    }
    initialize(){
        this.background = new Background();
        this.player = new Player();
    }
    display(){
        clear();
        this.background.display();
        this.player.display();
    }
    setup(){
        this.player.setup();
    }
}