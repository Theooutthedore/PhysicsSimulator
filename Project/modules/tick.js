function tick(funcRenderer, intTPS, intTickScale, RB) {
    //everything that needs to happen in 1 tick
    console.log("tick");
    for (i = 0; i < 4; i++) {

        if (!RB[i].hidden) {
            gravity(RB);
            move(RB);
            funcRenderer(RB);
        }
    }
    console.log("tick end");
}
function reverseTick(intTPS, intTickScale) {
    //do the inverse of tick()
    console.log("reverse tick");
}
function gravity(RB, intTPS, intTickScale) {
    RB.velo[1] += 9.8 / intTPS * intTickScale;
    //9.8m/s = m/tick
    return RB;
}
function move(RB) {
    for (i = 0; i < 3; i++) {
        RB.pos[i] += RB.velo[i];
    }
}

export { tick, reverseTick };
