export default class Paddle {
    constructor(gameWidth, gameHeight) {
        //the initial values of the paddle
        this.width=100
        this.height=20

        this.position = { 
            y: gameHeight - this.height - 10,
            x: gameWidth/2 - this.width/2
        }
    }
    draw(ctx) {
        ctx.fillStyle = "rgb(255, 120, 255)"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(dTime) { //the delta time is the time between updates
        if (!dTime) return
        this.position.x += 5 / dTime; 
    }
}