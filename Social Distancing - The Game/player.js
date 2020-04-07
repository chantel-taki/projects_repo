class Player {
    constructor(){
        this.img = createImg("assets/Player Running.gif");
        this.velocity = 0;
        this.gravity = 0.5;

    }
    setup(){
        this.height = this.img.height;
        this.width = this.img.width;
        this.x = 100;
        this.y = 500;
    }
    display() {
        this.img.position(this.x, this.y);
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > height - this.height) {
            this.y = height - this.height;
        }
    }
    jump(){
        this.velocity = -12;

    }
    duck(){

    }
}