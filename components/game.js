import Ball from "./ball.js";
import { InputHandler } from "./input.js";
import Paddle from "./paddle.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
  }
  start() {
    new InputHandler(this.paddle);

    this.gameObjects = [
        this.ball,
        this.paddle
    ]
  }
  update(dTime) {
    this.gameObjects.forEach((obj)=> obj.update(dTime))
  }
  draw(ctx) {
    this.gameObjects.forEach((obj)=> obj.draw(ctx))
  }
}
