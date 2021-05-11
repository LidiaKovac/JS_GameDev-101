import { detectCollision } from "../interactions/collision.js";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("brick");
    this.game = game
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 40;
    this.height = 24;

    this.position = position;
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
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y
      this.markedForDeletion = true;
    }
  }
}
