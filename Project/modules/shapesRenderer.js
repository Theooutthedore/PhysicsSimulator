function renderer(RB){
    if(RB.shape === "circle"){
        circle(RB);
    }else if(RB.shape === "square"){
        //render square
    }
}

function circle(RB/*Rigidbody object*/) {
    //circle and line to indicate rotation angle
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");

    RB.pos[1] *= -1;//flip y axis

    ctx.fillStyle = "white";
    ctx.arc(RB.pos[0], RB.pos[1], RB.size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(RB.pos[0], RB.pos[1]);
    //trig to draw line at angle
    ctx.lineTo(RB.pos[0] + RB.size * Math.cos(RB.pos[2] * Math.PI / 180), RB.pos[1] + RB.size * Math.sin(RB.pos[2] * Math.PI / 180));
    ctx.stroke();
}

function square(intPos, intSize) {
    //square stuff, has identicle phases every 90deg
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");

    intPos[1] *= -1;//flip y axis

    if (intPos[2] % 90 === 0) {
        ctx.fillStyle = "white";
        ctx.fillRect(intPos[0] - intSize, intPos[1] - intSize, intSize * 2, intSize * 2);
    } else {
        //draw diamond shape when rotation angle != n*90
    }
}
//other shapes later
export default renderer;