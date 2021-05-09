export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("brick");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 52;
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

  }
}
