import Paddle from "./components/paddle.js";
import {InputHandler} from "./components/input.js"

window.onload = () => {
  let canvas = document.getElementById("screen");
  let ctx = canvas.getContext("2d"); //ctx stands for context

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;

  // ctx.clearRect(0,0, 800, 600) /*this does not seem important now because
  // am working on a live server that refreshes with every change, but it's needed.
  // Withouth this line, when moving objects via commands the old state of the agent will
  // still be visible.
  // */

  //     //creates a square on the canvas
  //     ctx.fillStyle = "rgb(255, 120, 255)";
  //     ctx.fillRect(20, 20, 100, 100);
  //     /*
  //     first param: x coord
  //     second param: y coord
  //     third param: width
  //     fourth param: heigth

  //     Note that fillStyle will have to be re-called everytime we want to
  //     change color to the object. For example:
  //     */
  //     ctx.fillStyle = "rgb(255,255, 120)"; //this will change the next fillRect style
  //     ctx.fillRect(190, 20, 100, 100);
  //   };

  //CODE ABOVE COMMENTED FOR FUTURE REFERENCE

  let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

  new InputHandler(paddle)

  paddle.draw(ctx);

  let lastTime = 0

  //to make our game work, we need a game loop.
  //A game loop runs every frame, updates objects and postions
  //We cannot use a while true because it relays on the computer's speed.

  function gameLoop(timestamp) { //would this work with arrow fn?
    let dTime = timestamp - lastTime; //gets difference between last refresh and current refresh = DELTA
    lastTime = timestamp //updates the last refresh time
    
    ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT) 
    paddle.update(dTime)
    paddle.draw(ctx)

    requestAnimationFrame(gameLoop) //when the next frame is ready, recurse
    //requestAnimationFrame will pass the timestamp automatically. 
  }

  gameLoop() //calls the loop, making the paddle move. 
};
