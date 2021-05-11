import Ball from "./ball.js";
import { InputHandler } from "./input.js";
import Paddle from "./paddle.js";
import {buildLevel, level_one} from "./levels.js"


export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    this.bricks = []
  }
  start() {
    new InputHandler(this.paddle);
    this.bricks = buildLevel(this, level_one)

    this.gameObjects = [
        this.ball,
        this.paddle, 
        ...this.bricks
    ]
  }
  update(dTime) {
    this.gameObjects.forEach((obj)=> obj.update(dTime))
    this.gameObjects = this.gameObjects.filter((obj)=> !obj.markedForDeletion)
  }
  draw(ctx) {
    this.gameObjects.forEach((obj)=> obj.draw(ctx))
  }
}
