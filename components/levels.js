import Brick from "./brick.js"
export function buildLevel(game, level) {
    let bricks = []
    level.forEach((row, rowI) => {
        row.forEach((brick, brickI)=> {
            if (brick === 1) { //if we want a brick
                let position= {
                    x: 40 * brickI,
                    y: 24 * rowI
                }
                bricks.push(new Brick(game, position))
            }
        })
    });
    return bricks
}

export const level_one = []

for(let i=0; i<4; i++) { //for each row
    let line = []
    for(let j=0; j<20; j++) { //produce 20 random binary values representing the presence of bricks
        line.push(Math.round(Math.random()*1))
    }
    level_one.push(line)
}