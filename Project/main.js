//GUI or interface
import propGUIinitiate from "./modules/propertiesGUI.js";
import newRigidbodyGUI from "./modules/newrigidbodyGUI.js";
import removeRigidbodyGUI from "./modules/removerigidbodyGUI.js";
import * as tGUI from "./modules/timeGUI.js";
console.log("GUI initiated");
//Renderer
import canvas from "./modules/canvas.js";
import * as render from "./modules/shapesRenderer.js";
//Physics
import * as t from "./modules/tick.js";
import clock from "./modules/clock.js";

propGUIinitiate();
newRigidbodyGUI();
removeRigidbodyGUI();
canvas();

tGUI.stepForward(t.tick);
tGUI.stepBackward(t.reverseTick);

//clock(tick,1,1,false);

var RB = new rigidBody([100, 100, 45], [0, 0, 0], 50, 0, "circle", false);

console.log(RB);

render.circle(RB);

//functions
function rigidBody(intPos, intVelo, intSize, intMass, strShape, boolHidden) {
    this.pos = intPos;
    this.velo = intVelo;
    this.size = intSize;
    this.mass = intMass;
    //this.density = mass/size;
    //force = velo*mass
    this.shape = strShape;
    this.hidden = boolHidden;
}





