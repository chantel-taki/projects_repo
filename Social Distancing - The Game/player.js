class Player {
    constructor(){
        this.img = createImg("assets/Player Running.gif");
    }
    setup(){
        this.height = this.img.height;
        this.width = this.img.width;
        this.x = 100;
        this.y = 500;
    }
    display() {
        this.img.position(this.x, this.y);
    }
}