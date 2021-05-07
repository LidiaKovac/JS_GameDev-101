import Paddle from "./paddle.js";

export class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          paddle.moveLeft()
          break;
        case "ArrowRight":
            paddle.moveRight()
            break;
      }
    });
    document.addEventListener("keyup", ()=> paddle.stop())
  }
}
