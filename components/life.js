export default class Life {
    constructor(game, index) {
    this.game = game; //this will allow us to access info about other game objects

    this.image = document.getElementById("life");
    this.active = true
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 30;
    this.height = 28;
    this.position = {
      y: this.gameHeight - this.height - 5 - index * (this.height + 5),
      x: this.gameWidth - this.width - 10
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
    update(dTime) {
        
    }
}