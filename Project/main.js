//GUI or interface
import propGUIinitiate from "./modules/propertiesGUI.js";
import newRigidbodyGUI from "./modules/newrigidbodyGUI.js";
import removeRigidbodyGUI from "./modules/removerigidbodyGUI.js";
import * as tGUI from "./modules/timeGUI.js";
console.log("GUI initiated");
//Renderer
import canvas from "./modules/canvas.js";
import renderer from "./modules/shapesRenderer.js";
//Physics
import * as t from "./modules/tick.js";
//import clock from "./modules/clock.js";

propGUIinitiate();
newRigidbodyGUI();
removeRigidbodyGUI();
canvas();

const TPS = 100;
var intTickScale = 50;

//defs
class rigidBody {
    constructor(intPos, intVelo, intSize, intMass, strShape, boolHidden) {
        this.pos = intPos;
        this.velo = intVelo;
        this.size = intSize;
        this.mass = intMass;
        //this.density = mass/size;
        //force = velo*mass
        this.shape = strShape;
        this.hidden = boolHidden;
    }
    //gets
    /*
    get getPos() {
        return this.pos;
    }
    get getVelo() {
        return this.velo;
    }
    get getSize() {
        return this.size;
    }
    get getHidden() {
        return this.hidden;
    }
    get getShape(){
        return this.shape;
    }
    */
    //sets
    /*
    set setPos(intPos){
        this.pos = intPos;
    }
    set setVelo(intVelo) {
        this.velo = intVelo;
    }
    set setSize(intSize) {
        this.shape = intSize;
    }
    set setHidden(boolHidden) {
        this.hidden = boolHidden;
    }
    set setShape(strShape){
        this.shape = strShape;
    }
    */
    // methods

}

let RB = new rigidBody([-500, 100, 45], [10, 100, 20], 50, 0, "circle", false);
renderer(RB);
console.log(RB.velo);
console.log(RB.pos);

tGUI.stepForward(t.tick, renderer, TPS, intTickScale, RB);
tGUI.stepBackward(t.tick, renderer, TPS, intTickScale, RB);








