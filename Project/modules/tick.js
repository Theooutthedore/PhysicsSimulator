function tick(funcRenderer, intTPS, intTickScale, RB) {
    //everything that needs to happen in 1 tick
    console.log("tick");

    if (!RB.getHidden) {
        if (intTickScale > 0) {
            normal(intTPS, intTickScale, RB);
        } else if (intTickScale < 0) {
            reverse(intTPS, intTickScale, RB);
        }

        console.log(RB.getPos);
        console.log(RB.getVelo);
        funcRenderer(RB);
    }

    console.log("tock");
}

function normal(intTPS, intTickScale, RB) {
    //normal forward
    RB.gravity(intTPS, intTickScale);
    RB.groundCheck();
    RB.move(intTPS, intTickScale);
}

function reverse(intTPS, intTickScale, RB) {
    //reverse backward
    console.log("reverse tick");
    RB.move(intTPS, intTickScale);
    RB.groundCheck();
    RB.gravity(intTPS, intTickScale);
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
export { tick };
