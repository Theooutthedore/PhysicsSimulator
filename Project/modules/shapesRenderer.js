function renderer(RB) {

    //reset canvas
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");

    //canvas w:h = 12:8
    const base = 128;//base unit can be scaled if needed later
    const cwidth = base * 12;
    const cheight = base * 8;

    canvas.width = cwidth;
    canvas.height = cheight;

    ctx.translate(cwidth / 2, cheight);

    if (RB.getShape === "circle") {
        circle(RB);
    } else if (RB.getShape === "square") {
        //render square
    }//more shapes later

}

function circle(RB/*Rigidbody object*/) {
    //circle and line to indicate rotation angle
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");

    //
    var x = Math.round(RB.getPos[0]),
        y = -Math.round(RB.getPos[1]),
        r = Math.round(RB.getPos[2]),
        size = RB.getSize;

    ctx.fillStyle = "white";
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(x, y);
    //trig to draw line at angle
    ctx.lineTo(x + size * Math.cos(r * Math.PI / 180), y + size * Math.sin(r * Math.PI / 180));
    ctx.stroke();
}

//TODO finish square
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