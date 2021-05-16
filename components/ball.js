import {detectCollision} from "../interactions/collision.js";
import Life from "./life.js"

export default class Ball {
  constructor(game) {
    this.game = game; //this will allow us to access info about other game objects

    this.image = document.getElementById("ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 20;
    this.height = 20;

    this.position = {
      y: 200,
      x: Math.random() * this.gameWidth,
    };

    this.speed = {
      x: 2,
      y: 2,
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    //wall on left/right
    if (
      this.position.x >= this.gameWidth - this.width ||
      this.position.x <= 0
    ) {
      this.speed.x = -this.speed.x;
    }
    //wall on top
    if (
      this.position.y <= 0 ) {
      this.speed.y = -this.speed.y;
    }
    //bottom wall
    if (this.position.y >= this.gameHeight - this.height) {
      console.log(this.game.lives)
      this.game.livesAmount -= 1
    console.log(this.game.lives[this.game.livesAmount -1])
      this.game.lives[this.game.livesAmount -1].active = false
      this.speed.y = -this.speed.y;
    }
    //collision with paddle

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.width;
    }
  }
}
