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

const TPS = 10;
var intTickScale = 1;

//defs
class rigidBody {
    #pos = [0,500,0];
    #velo = [0,0,0];
    #size = 10;
    #mass;//unused
    #shape = "circle";
    #hidden = true;
    #id;//unused
    constructor(intPos, intVelo, intSize, intMass, strShape, boolHidden, intId) {
        this.#pos = intPos;
        this.#velo = intVelo;
        this.#size = intSize;
        this.#mass = intMass;
        //this.density = mass/size;
        //force = velo*mass
        this.#shape = strShape;
        this.#hidden = boolHidden;
        this.#id = intId;
    }

    // methods
    gravity(intTPS, intTickScale) {
        this.#velo[1] -= 10 / intTPS * intTickScale;
        //9.8m/s = m/tick
    }

    move(intTPS, intTickScale) {
        for (let i = 0; i < 3; i++) {
            this.#pos[i] += this.#velo[i] / intTPS * intTickScale;
        }
        console.log(this.#pos);
    }
    
    groundCheck(){
        console.log(this.#velo);
        if(this.#pos[1] - this.#size <=0){
            console.log("hit ground");
            this.#velo[1] *= -1;
        }
    }

    //gets
    get getPos() {
        return this.#pos;
    }
    get getVelo() {
        return this.#velo;
    }
    get getSize() {
        return this.#size;
    }
    get getHidden() {
        return this.#hidden;
    }
    get getShape() {
        return this.#shape;
    }
    get getMass() {
        return this.#mass;
    }
    get getHidden() {
        return this.#hidden;
    }
    get getId() {
        return this.#id;
    }
    
    //sets
    set setPos(intPos) {
        this.#pos = intPos;
    }
    set setVelo(intVelo) {
        this.#velo = intVelo;
    }
    set setSize(intSize) {
        this.#size = intSize;
    }
    set setHidden(boolHidden) {
        this.#hidden = boolHidden;
    }
    set setShape(strShape) {
        this.#shape = strShape;
    }

}

let RB = new rigidBody([-500, 100, 45], [100, 100, 20], 50, 0, "circle", false, 0);

console.log(RB);

renderer(RB);

tGUI.stepForward(t.tick, renderer, TPS, intTickScale, RB);
tGUI.stepBackward(t.tick, renderer, TPS, intTickScale, RB);








