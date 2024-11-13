"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import { randomNumber } from "./scripts/utils.js";


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
        const width = canvas.width ;
        const height = canvas.height ;
        const halfWidth = width / 2;
        

        // Tekennen van de achtergrond 
        context.fillStyle = Utils.hsl(40, 20, 90); // Beige achtergrond
        context.fillRect(0, 0, width, height);

        // Teken twee halve cirkels rondom het canvas
        drawHalfCircleLines(halfWidth, 0, halfWidth, randomColor(), 0, Math.PI); // Boven
        drawHalfCircleLines(halfWidth, height, halfWidth, randomColor(), Math.PI, 2 * Math.PI); // Onder

         //Tekenen van vierkant in het midden.
        function drawCenterSquare() {
        const squareColor = randomColor(); //
        const squareSize = Utils.randomNumber(200, 1000);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        context.fillStyle = squareColor;
        context.fillRect(centerX - squareSize / 2, centerY - squareSize / 2, squareSize, squareSize);


         // teken 10 horizontale lijnen 
         const countLine = 10;
         const heightLine = size / countLine; // hoogte van elke lijn
 
         for (let i = 0; i < countLine; i++) {
             const yPositie = centerY - size / 2 + i * heightLine + heightLine / 2; // Y positie voor elke lijn
             const colorLine = randomColor(); // random kleur voor elke lijn
             const widthLine = Utils.randomNumber(80, 140); // random stroke van 5 tot 40
             
             drawHorizontalLine(centerX - size / 2, yPositie, size, colorLine, widthLine);
         }
         }
        drawCenterSquare();

        //horizontale lijnen tekenen 
        function drawHorizontalLine(x, y, length, color, strokeWidth) {
            context.strokeStyle = color;
            context.lineWidth = strokeWidth;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + length, y);
            context.stroke();
        }
      
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
    

    //functie lijnen tekenen van center
    function drawLineFromCenter(x, y, length, angle, color) {
        context.strokeStyle = color;
        context.lineWidth = 20;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length); // hulp van chat gpt voor de lijnen correct erin te zetten.
        context.stroke();
    }

   
    drawFirst(); // Roep de functie drawFirst aan om het ontwerp te tekenen
}

