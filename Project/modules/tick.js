function clock(interval ,funcRenderer, intTPS, intTickScale, RB) {
    var intMSPT = 1000 / intTPS / intTickScale,     //milliseconds per tick
        intRTPS = intTPS * intTickScale,            //real ticks per second
        boolReverse = intTickScale < 0,
        boolPause = (intTickScale == 0);

    if (boolPause) {
        console.log("pls pause");
        clearInterval(interval);
    } else if (!interval) {
        interval = setInterval(tick, intMSPT, funcRenderer, intTPS, boolReverse, RB);
    }
}

function tick(funcRenderer, intTPS, boolReverse, RB) {
    //everything that needs to happen in 1 tick
    //console.log("tick");

    if (!RB.getHidden) {
        if (!boolReverse) {
            normal(intTPS, RB);
        } else {
            reverse(intTPS, RB);
        }

        console.log("POS"+RB.getPos);
        console.log("VELO"+RB.getVelo);

        funcRenderer(RB);
    }
    //console.log("tock");
}

function normal(intTPS, RB) {
    //normal forward
    RB.gravity(intTPS);
    RB.groundCheck();
    RB.move(intTPS);
}

function reverse(intTPS, RB) {
    //reverse backward
    console.log("reverse tick");
    RB.move(intTPS,true);
    RB.groundCheck();
    RB.gravity(intTPS, true);
}
/*
function gravity(RB, intTPS, intTickScale) {
    RB.velo[1] -= 10 / intTPS * intTickScale;
    //9.8m/s = m/tick
    return RB;
}

function move(RB, intTPS, intTickScale) {
    for (let i = 0; i < 3; i++) {
        RB.pos[i] += RB.velo[i] / intTPS * intTickScale;
    }
    return RB;
}
*/
export { tick, clock };
