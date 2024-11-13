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
   // Functie om ontwerp te tekenen
function drawFirst() {
    const width = canvas.width;
    const height = canvas.height;
    const halfWidth = width / 2;

    // Tekennen van de achtergrond 
    context.fillStyle = Utils.hsl(40, 20, 90); // Beige achtergrond
    context.fillRect(0, 0, width, height);

    // Teken twee halve cirkels rondom het canvas
    const smallerRadius = Utils.randomNumber(200, 800);
    drawHalfCircleLines(halfWidth, 0, smallerRadius, randomColor(), 0, Math.PI); // Boven
    drawHalfCircleLines(halfWidth, height, smallerRadius, randomColor(), Math.PI, 2 * Math.PI); // Onder

    // Tekenen van vierkant in het midden
    function drawCenterSquare() {
        const squareColor = randomColor();
        const squareSize = Utils.randomNumber(200, 1000);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        context.fillStyle = squareColor;
        context.fillRect(centerX - squareSize / 2, centerY - squareSize / 2, squareSize, squareSize);

        // teken 10 horizontale lijnen 
        const countLine = 10;
        const heightLine = squareSize / countLine; // hoogte van elke lijn

        for (let i = 0; i < countLine; i++) {
            const yPositie = centerY - squareSize / 2 + i * heightLine + heightLine / 2; // Y positie voor elke lijn
            const colorLine = randomColor(); // random kleur voor elke lijn
            const widthLine = Utils.randomNumber(80, 140); // random stroke van 80 tot 140

            drawHorizontalLine(centerX - squareSize / 2, yPositie, squareSize, colorLine, widthLine);
        }

        // Teken 30 willekeurige cirkels in het vierkant
        const circleCount = 30;
        for (let i = 0; i < circleCount; i++) {
            const circleSize = Utils.randomNumber(10, squareSize / 5); // Random grootte van de cirkel
            const xPositie = Utils.randomNumber(centerX - squareSize / 2, centerX + squareSize / 2); // Random X positie
            const yPositie = Utils.randomNumber(centerY - squareSize / 2, centerY + squareSize / 2); // Random Y positie
            const isEllipse = Math.random() > 0.5; // Random keuze tussen cirkel of ellips
            const ellipseWidth = isEllipse ? Utils.randomNumber(circleSize / 2, circleSize) : circleSize;//hulp chat gpt
            const ellipseHeight = isEllipse ? Utils.randomNumber(circleSize / 2, circleSize) : circleSize;

            const opacity = Utils.randomNumber(30, 100) / 100; // Random doorzichtigheid tussen 30% en 100%
            const circleColor = Utils.hsla(Utils.randomNumber(20, 40), 70, 50, opacity * 100); // Random kleur met doorzichtigheid

            drawRandomCircle(xPositie, yPositie, ellipseWidth, ellipseHeight, circleColor);
        }
    }
    drawCenterSquare();

    // horizontale lijnen tekenen 
    function drawHorizontalLine(x, y, length, color, strokeWidth) {
        context.strokeStyle = color;
        context.lineWidth = strokeWidth;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + length, y);
        context.stroke();
    }
}

// Functie om willekeurige cirkel (of ellips) te tekenen met willekeurige grootte en doorzichtigheid
function drawRandomCircle(x, y, width, height, color) {
    context.fillStyle = color;
    context.beginPath();
    context.ellipse(x, y, width, height, 0, 0, Math.PI * 2);
    context.fill();
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

