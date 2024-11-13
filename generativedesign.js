"use strict";
import context from "../../dev1-courseproject-NoahGoossens-ehb/dev1-courseproject-NoahGoossens-ehb/scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import { hsl, randomGaussian, randomNumber } from "./scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;


function sizeCanvas() {
    width = window.innerWidth * 0,8; //verkleine naar 80%
    height = window.innerHeight * 0,8; // verkleine naar 80%
    draw();
}

function draw() {

    function randomColor() {
        const hue = Math.floor(Math.random() * 40) + 20;  // oranje-geel bereik
        const lightness = Math.floor(Math.random() * 30) + 40;  // Lichtheid 40% # 70%
        return hsl(hue, 70, lightness);
    }

    // halve cirkel tekenen met variabele kleur en positie
    function drawHalfCircle(x, y, radius, color, angleStart, angleEnd) {
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, angleStart, angleEnd);
        context.fill();
    }


}