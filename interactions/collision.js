export function detectCollision(ball, gameObject) {
    //collision with paddle
    let bottomOfBall = ball.position.y + ball.height;
    let topOfBall = ball.position.y;
    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height
    if (
      bottomOfBall >= topOfObject && //the bottom of the ball is touching the top of an object
      topOfBall <= bottomOfObject && //the top of the ball is touching the bottom of an obj
      ball.position.x >= leftSideOfObject && 
      ball.position.x + ball.width <= rightSideOfObject
    ) {
      return true //the ball is colliding
    } else return false
}