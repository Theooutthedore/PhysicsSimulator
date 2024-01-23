
function testDraw(){
    var canvas = document.getElementById("canvas1");
    //var sim = document.getElementById("simulation");

    var ctx = canvas.getContext("2d");
    //console.log(sim.offsetWidth);
    //console.log(sim.offsetHeight);
    
    //canvas w:h = 12:8
    var base = 128;//base unit can be scaled if needed later
    var cwidth = base * 12;
    var cheight = base * 8;

    canvas.width = cwidth;
    canvas.height = cheight;
    
    // console.log(cwidth);
    // console.log(cheight);

    //draw rect
    //ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.strokeRect(cwidth/2-50,cheight/2-50,100,100);
    //ctx.stroke();
}
export default testDraw;
