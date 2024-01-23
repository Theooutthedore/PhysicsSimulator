function timeGUI() {
    
}
function stepBackward(funcTickOnclick){
    var stepb = document.getElementById("stepb");
    stepb.addEventListener("click", function () { funcTickOnclick() });
}

function stepForward(funcTickOnclick){
    var stepf = document.getElementById("stepf");
    stepf.addEventListener("click", function () { funcTickOnclick() });
}

function playForward(funcOnclick){
    var playf = document.getElementById("playf");
    playf.addEventListener("click", function () { funcOnclick() });
}

function playBackward(funcOnclick) {
    var playb = document.getElementById("playb");
    playb.addEventListener("click", function () { funcOnclick() });
}

function pause(funcOnclick) {
    var pause = document.getElementById("pause");
    pasue.addEventListener("click", function () { funcOnclick() });

}
export {timeGUI,stepBackward,stepForward,playBackward,playForward,pause};