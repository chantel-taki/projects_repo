class Background {
    constructor() {
        this.random = 0;
        this.images = [
            { src: loadImage("Game Background Layer 1.png"), x: 0, speed: 0 },
            { src: loadImage("Game Background Layer 2.png"), x: 0, speed: 1 },
            { src: loadImage("Game Background Layer 3.png"), x: 0, speed: 2 },
            { src: loadImage("Game Background Layer 4.png"), x: 0, speed: 3 },
        ];
    }
    move(img) {
        img.x -= img.speed;
        image(img.src, img.x, 0);
        image(img.src, img.x + innerWidth, 0);
        if (img.x <= -width) {
            img.x = 0;
        }
    }
    display() {
        this.images.forEach(image => {
            this.moveBy(image);
        });
    
    }
    
}

