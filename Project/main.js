//GUI or interface
import propGUIinitiate from "./modules/propertiesGUI.js";
import newRigidbodyGUI from "./modules/newrigidbodyGUI.js";
import removeRigidbodyGUI from "./modules/removerigidbodyGUI.js";
import timeGUI from "./modules/timeGUI.js";
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

const TPS = 100;        //ticks per second
var intTickScale = 1;   //speed multiplier

class rigidBody {
    #pos;   //position
    #velo;  //velocity
    #size;  //radius
    #mass;  //mass      //unused
    #shape; //shape
    #hidden;//is it hidden
    #id;    //id        //unused
    #debug;

    constructor(/*intPos, intVelo, intSize, strShape, boolHidden*/) {
        //defaults
        this.#pos = [0, 500, 0];
        this.#velo = [0, 0, 0];
        this.#size = 50;
        this.#shape = "circle";
        this.#hidden = true;
        this.#debug = false;
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
    gravity(intTPS, boolReverse) {
        this.#velo[1] -= 10 / intTPS * (boolReverse ? -1 : 1);
        //9.8m/s (10m/s^2)
        //TPS = ticks/second
        //(9.8/TPS)m/tick
    }

    move(intTPS, boolReverse) {
        for (let i = 0; i < 3; i++) {
            this.#pos[i] += this.#velo[i] / intTPS * (boolReverse ? -1 : 1);  //add velo to pos
        }
        this.#pos[2] %= 360; //reset rotation over 360deg
        //console.log(this.#pos);
    }

    groundCheck() {
        //TODO: fix this rubbish
        //there is technically inaccuracies here, the higher TPS the lower the error
        if (this.#pos[1] - this.#size <= 0) {
            console.log("ground contact");
            //add back overshoot into ground
            //this.#pos[1] += this.#pos[1] - this.#size;
            //bounce and reverse y velo
            this.#velo[1] *= -1;
            //this.#velo[1] -= 10;
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
    get getDebug() {
        return this.#debug;
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
    set setDebug(boolDebug) {
        this.#debug = boolDebug;
    }

}

let RBs = [
    new rigidBody(),
    new rigidBody(),
    new rigidBody(),
    new rigidBody(),
];

RBs[0].setHidden = false;
RBs[0].setPos = [0, 500, 0];
RBs[0].setVelo = [10, 0, 10];
RBs[0].setDebug = true;

renderer(RBs[0]);

console.log("RB pos [" + RBs[0].getPos + "]");

var interval = null;
timeGUI(interval, t.clock, t.tick, renderer, TPS, intTickScale, RBs[0]);