class Player {
    constructor(){
        this.img = loadImage("assets/Player Running.gif");
    }
    setup(){
        this.height = this.img.height;
        this.width = this.img.width;
        this.x = 100;
        this.y = 500;
    }
    display() {
        image(this.img, this.x, this.y);
    }
}