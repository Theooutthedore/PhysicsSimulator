function timeGUI(interval, funcClock, funcTick, funcRenderer, intTPS, intTickScale, RB) {

    stepForward(funcTick, funcRenderer, intTPS, RB);
    stepBackward(funcTick, funcRenderer, intTPS, RB);

    playForward(interval, funcClock, funcRenderer, intTPS, intTickScale, RB);
    playBackward(interval, funcClock, funcRenderer, intTPS, -intTickScale, RB);

    pause(interval, funcClock, funcRenderer, intTPS, RB);
}

function stepForward(funcOnclick, funcRenderer, intTPS, RB) {
    var stepf = document.getElementById("stepf");

    stepf.addEventListener("click", function () {
        funcOnclick(funcRenderer, intTPS, false, RB);
    });
}

function stepBackward(funcOnclick, funcRenderer, intTPS, RB) {
    var stepb = document.getElementById("stepb");
    stepb.addEventListener("click", function () {
        funcOnclick(funcRenderer, intTPS, true, RB);
    });
}

function playForward(interval, funcOnclick, funcRenderer, intTPS, intTickScale, RB) {
    var playf = document.getElementById("playf");
    playf.addEventListener("click", function () {
        funcOnclick(interval, funcRenderer, intTPS, intTickScale, RB);
        console.log("playforwards");
    });
}

function playBackward(interval, funcOnclick, funcRenderer, intTPS, intTickScale, RB) {
    var playb = document.getElementById("playb");
    playb.addEventListener("click", function () {
        funcOnclick(interval, funcRenderer, intTPS, intTickScale, RB);
        console.log("playbackwards");
    });
}

function pause(interval, funcOnclick, funcRenderer, intTPS, RB) {
    var pause = document.getElementById("pause");
    pause.addEventListener("click", function () {
        funcOnclick(interval, funcRenderer, intTPS, 0, RB);
        console.log("pasue");
    });

}
export default timeGUI;