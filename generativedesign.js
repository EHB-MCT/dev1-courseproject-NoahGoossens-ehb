"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let canvas = context.canvas;


draw();

function draw() {
    // kleur generenen
    function randomColor() {
        const hue = Math.floor(Math.random() * 40) + 20;  // Oranje-geel bereik
        const lightness = Math.floor(Math.random() * 30) + 40;  // Lichtheid 40% - 70%
        return Utils.hsl(hue, 70, lightness);
    }

    // Functie om ontwerp te tekenen
    function drawFirst() {
        const width = canvas.width;
        const height = canvas.height;
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        // Tekennen van de achtergrond 
        context.fillStyle = Utils.hsl(40, 20, 90); // Beige achtergrond
        context.fillRect(0, 0, width, height);

        // Teken twee halve cirkels rondom het canvas
        drawHalfCircleLines(halfWidth, 0, halfWidth, randomColor(), 0, Math.PI); // Boven
        drawHalfCircleLines(halfWidth, height, halfWidth, randomColor(), Math.PI, 2 * Math.PI); // Onder
      
    }

    // Functie om havle cirkel te tekenen 
    function drawHalfCircleLines(x, y, radius, color, angleStart, angleEnd) {
        // Teken de halve cirkel
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, angleStart, angleEnd);
        context.fill();

        for (let i = 0; i < 40; i++) {
            let angle = angleStart + (i / 40) * (angleEnd - angleStart); // Verdelen van  de lijnen gelijkmatig over de halve cirke   l
            let lineColor = randomColor();
            drawLineFromCenter(x, y, radius, angle, lineColor);
        }
    }

    function drawLineFromCenter(x, y, length, angle, color) {
        context.strokeStyle = color;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length); // hulp van chat gpt voor de lijnen correct erin te zetten.
        context.stroke();
    }

    drawFirst(); // Roep de functie drawFirst aan om het ontwerp te tekenen
}

