import Ball from "./ball.js";
import { InputHandler } from "./input.js";
import Paddle from "./paddle.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    
  }
  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    new InputHandler(this.paddle);
  }
  update(dTime) {
    this.paddle.update(dTime);
    this.ball.update(dTime);
  }
  draw(ctx) {
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
  }
}
