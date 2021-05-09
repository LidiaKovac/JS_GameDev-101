import Ball from "./ball.js";
import Brick from "./brick.js";
import { InputHandler } from "./input.js";
import Paddle from "./paddle.js";


export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    this.bricks = []
  }
  start() {
    for (let i = 0; i<10; i++) {
      this.bricks.push(new Brick(this, {x:i*52, y: 30}))
    }
    new InputHandler(this.paddle);

    this.gameObjects = [
        this.ball,
        this.paddle, 
        ...this.bricks
    ]
  }
  update(dTime) {
    this.gameObjects.forEach((obj)=> obj.update(dTime))
  }
  draw(ctx) {
    this.gameObjects.forEach((obj)=> obj.draw(ctx))
  }
}
