import Ball from "./ball.js";
import { InputHandler } from "./input.js";
import Life from "./life.js"
import Paddle from "./paddle.js";
import {buildLevel, level_one} from "./levels.js"


export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    this.bricks = []
    this.livesAmount = 3
    this.lives = []
  }
  generateLives () {
    for (let i=0; i<this.livesAmount; i++) {
      this.lives.push(new Life(this, i))
    }
  }
  start() {
    new InputHandler(this.paddle);
    this.bricks = buildLevel(this, level_one)
    this.generateLives()
    this.gameObjects = [
        this.ball,
        this.paddle, 
        ...this.bricks,
        ...this.lives
    ]
  }
  update(dTime) {
    
    this.gameObjects.forEach((obj)=> obj.update(dTime))
    this.gameObjects = this.gameObjects.filter((obj)=> !obj.markedForDeletion)
    this.gameObjects = this.gameObjects.filter((obj)=> !obj.active)
    //console.log(this.gameObjects)
    if (this.gameObjects.length <=5) { //ball, paddle and all three lives
      this.start()
      this.ball.speed.y += 1 
      this.ball.speed.x += 1
    }
  }
  // drawLives(ctx) {
  //   this.lives.forEach((life)=> life.draw(ctx))
  // }
  // updateLives() {
  //   this.game.lives.pop()
  //   this.speed.y = -this.speed.y;
  // }
  draw(ctx) {
    this.gameObjects.forEach((obj)=> obj.draw(ctx))
  }
}
