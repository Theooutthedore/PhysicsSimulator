function canvas() {
    var canvas = document.getElementById("canvas1");

    var ctx = canvas.getContext("2d");
    //console.log(sim.offsetWidth);
    //console.log(sim.offsetHeight);

    //canvas w:h = 12:8
    var base = 128;//base unit can be scaled if needed later
    var cwidth = base * 12;
    var cheight = base * 8;

    canvas.width = cwidth;
    canvas.height = cheight;

    ctx.translate(cwidth / 2, cheight);

    // console.log(cwidth/2);
    // console.log(cheight);

    //draw rect to test
    /*
    ctx.fillStyle = "white";
    ctx.fillRect(100,-200, 100, 100);
    */
}
export default canvas;