export default class Paddle {
    constructor(gameWidth, gameHeight) {
        //the initial values of the paddle
        this.width=100
        this.height=20

        this.maxSpeed = 7
        this.speed = 0 //the current speed

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
        this.position.x += this.speed; 
        if (this.position.x < 0) this.position.x = 0 //wall collision
        if (this.position.x > 800 - this.width) this.position.x = 800 - this.width //wall collision
    }
    moveLeft() {
        this.speed = -this.maxSpeed /*when we click the left key, 
        the paddle is going to move -10px, which is 10px to the left 
        */
    }
    moveRight() {
        this.speed = this.maxSpeed 
    }
    stop() {
        this.speed = 0
    }
}