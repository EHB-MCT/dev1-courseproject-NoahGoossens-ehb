"use strict";
import context from "../../dev1-courseproject-NoahGoossens-ehb/dev1-courseproject-NoahGoossens-ehb/scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;


function sizeCanvas() {
    width = window.innerWidth * 0,8; //verkleine naar 80%
    height = window.innerHeight * 0,8; // verkleine naar 80%
}