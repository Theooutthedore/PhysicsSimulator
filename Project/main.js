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

const TPS = 1;
var intTickScale = 1;

//defs
class rigidBody {
    #pos;   //position
    #velo;  //velocity
    #size;  //radius
    #mass;  //mass      //unused
    #shape; //shape
    #hidden;//is it hidden
    #id;    //id        //unused

    constructor(/*intPos, intVelo, intSize, strShape, boolHidden*/) {
        //defaults
        this.#pos = [0, 500, 0];
        this.#velo = [0, 0, 0];
        this.#size = 50;
        this.#shape = "circle";
        this.#hidden = true;
        /*
        this.#pos = intPos;
        this.#velo = intVelo;
        this.#size = intSize;
        //this.#mass = intMass;
        //this.density = mass/size;
        //force = velo*mass
        this.#shape = strShape;
        this.#hidden = boolHidden;
        */
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
        //console.log(this.#pos);
    }

    groundCheck() {
        if (this.#pos[1] - this.#size <= 0) {
            //bounce and reverse y velo
            this.#velo[1] *= -1;
            this.#velo[1] -= 10;
            //add back overshoot into ground
            this.#pos[1] += this.#pos[1]-this.#size;
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
    set setShape(strShape) {
        this.#shape = strShape;
    }
    set setHidden(boolHidden) {
        this.#hidden = boolHidden;
    }

}

let RBs = [
    new rigidBody([-500, 100, 45], [100, 100, 20], 50, "circle", false),
    new rigidBody(),
    new rigidBody(),
    new rigidBody(),
];


RBs[0].setHidden = false;
RBs[0].setPos = [-500,100,45];

renderer(RBs[0]);

console.log(RBs);

tGUI.stepForward(t.tick, renderer, TPS, intTickScale, RBs[0]);
tGUI.stepBackward(t.tick, renderer, TPS, intTickScale, RBs[0]);








