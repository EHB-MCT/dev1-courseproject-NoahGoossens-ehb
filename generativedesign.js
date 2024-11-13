"use strict";
import context from "../../dev1-courseproject-NoahGoossens-ehb/dev1-courseproject-NoahGoossens-ehb/scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import { hsl, randomGaussian, randomNumber } from "./scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;


function sizeCanvas() {
    width = window.innerWidth * 0,8; //verkleine naar 80%
    height = window.innerHeight * 0,8; // verkleine naar 80%
}

function draw() {

    //const voor kleuren random//
    const colors = {
        background : hsl(randomNumber(0,360),20,95),
        color1: hsl(randomNumber(0,360),70,60),
        color2:  hsl(randomNumber(0,360),70,60),
        color3:  hsl(randomNumber(0,360),70,50),
        color4:  hsl(randomNumber(0,360),70,40)
    }
}