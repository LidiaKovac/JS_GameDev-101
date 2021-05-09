export default class Ball {
    constructor(game) {
        this.game = game //this will allow us to access info about other game objects 

        this.image = document.getElementById("ball")

        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.width = 20;
        this.height = 20;

        this.position = { 
            y: 50,
            x: Math.random() * this.gameWidth
        }

        this.speed = {
            x: 2,
            y: 2
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y , this.width, this.height)
    }
    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    //wall on left/right    
        if (this.position.x >= this.gameWidth - this.width || this.position.x <= 0) {
            this.speed.x = -this.speed.x
        }
    //wall on top/bottom
        if (this.position.y >= this.gameHeight - this.height || this.position.y <= 0) {
            this.speed.y = -this.speed.y
        }
    //collision with paddle
    let bottomOfBall = this.position.y + this.height
    let topOfPaddle = this.game.paddle.position.y
    let leftSideOfPaddle = this.game.paddle.position.x - this.game.paddle.width
    let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width
     if (bottomOfBall >= topOfPaddle 
        && this.position.x >= leftSideOfPaddle 
        && this.position.x + this.width <= rightSideOfPaddle) {
        this.speed.y = -this.speed.y
        this.position.y = this.game.paddle.position.y - this.width
     }
    }
}

