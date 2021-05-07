window.onload = () => {
    let canvas = document.getElementById("screen");
    let ctx = canvas.getContext("2d"); //ctx stands for context
  
    //creates a square on the canvas
    ctx.fillStyle = "rgb(255, 120, 255)";
    ctx.fillRect(20, 20, 100, 100);
    /* 
    first param: x coord
    second param: y coord
    third param: width
    fourth param: heigth

    Note that fillStyle will have to be re-called everytime we want to 
    change color to the object. For example:  
    */
    ctx.fillStyle = "rgb(255,255, 120)"; //this will change the next fillRect style
    ctx.fillRect(190, 20, 100, 100);
  };
