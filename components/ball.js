export default class Ball {
    constructor(gameWidth, gameHeight) {
        this.image = document.getElementById("ball")
        this.width = 20;
        this.height = 20;
        this.position = { 
            y: 50,
            x: Math.random()*gameWidth
        }
        this.speed = {
            x: 2,
            y: 2
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y , this.width, this.height)
    }
    update(dTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x >= 800 - this.width || this.position.x <= 0) {
            this.speed.x = -this.speed.x
        }
        if (this.position.y >= 600 - this.height || this.position.y <= 0) {
            this.speed.y = -this.speed.y
        }
    }
}

