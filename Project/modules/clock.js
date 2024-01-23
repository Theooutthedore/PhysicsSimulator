
function clock(funcTick, intTPS, intTickScale, boolReverse) {
    //executes the continuous playback of the simulation, setting tick intervals and play direction
    console.log("clock")
    var intRealTPS = intTPS * intTickScale;
    if (!boolReverse) {
        //normal forward playback
        funcTick();
    } else {
        //reverse playback
        funcTick();
    }
}
export default clock;