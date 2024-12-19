"use strict";
import context from "/scripts/context.js";
import * as Utils from "/scripts/utils.js";



let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', function (event) {
   mouseX = event.clientX;
   mouseY = event.clientY;
});

//vallende sterren animatie aanmaken(hulp van chat gpt)
let vallendeSterren = [];
const aantalVallendeSterren = 18;



//achtergrond functies instellen
function tekenAchtergrondSterren() {
   //kleur instellen voor achtergrond  

   context.fillStyle = Utils.hsl(210 , 50 ,10);
   context.fillRect(0,0,width,height * 0.7); //70% is lucht 30 is land (gras)

   const sterrenAantal = 1; //instellen aantal sterren

   for (let i = 0; i < sterrenAantal; i++) {
      const x = Utils.randomNumber(0,canvas.width);
      const y = Utils.randomNumber(0,canvas.height * 0.7);
      const grootte = Utils.randomNumber(1,2);
      context.fillStyle = Utils.hsl(60,100,90);
      Utils.fillCircle(x,y,grootte);
   }
}


function tekenVallendeSterren() {

   //wissen canvas 
   context.clearRect(0, 0, width, height);

  
   context.fillStyle = "white";
   tekenAchtergrondSterren();
 

      vallendeSterren.forEach((ster) => {
       Utils.fillCircle(ster.x, ster.y, ster.size);
       
       //muis toevoegen
       const delX = mouseX - ster.x; //verschil in X richting  
       const delY= mouseY - ster.y; //verschil in Y richting  
       const angle = Math.atan2(delY,delX); // Bereken de hoek naar de muis

       //aanpassen vallende ster op basis van muispositie, lichte afbuiging
       ster.x += Math.cos(angle) * 0.5;
       ster.y += ster.snelheid * 0.9;

       // Reset de ster als deze buiten het canvas is
       if (ster.x < 0 || ster.x > width || ster.y > height) {
           ster.x = Utils.randomNumber(0, width);
           ster.y = Utils.randomNumber(-50, -10); // Laat de ster weer bovenaan starten
           ster.snelheid = Utils.randomNumber(2, 5);
           
       }
       
       grasHeuvels();
       tekenHuisOpHeuvel();
   });

   requestAnimationFrame(tekenVallendeSterren);
}

//functie voor vallende sterren (update)
function initVallendeSterren(aantalSterren) {
   //initieren vallende ster
   if (vallendeSterren.length === 0) {}
   for (let i = 0; i < aantalSterren; i++) {
      
       vallendeSterren.push({
           x: Utils.randomNumber(0, width), //willekeurige x positie voor de ster
           y: Utils.randomNumber(0, height * 0.7), //willekeurige y positie
           size: Utils.randomNumber(1, 3), //willekeurige grootte
           snelheid: Utils.randomNumber(2, 5), //willekeurige snelheid
           gradenInval: Utils.randomNumber(-1, 1), //willekeurige inval hoek
       });
   }
   
}



const width = context.canvas.width;
const height = context.canvas.height;

function grasHeuvels() {
     //grasveld
   //heuvels van grasveld voor diepte
   context.beginPath();
   context.moveTo(0, canvas.height * 0.7);

   //eerste heuvel
   const kleuGrasDonker = Utils.hsl(120, 100, 10);  
   context.fillStyle = kleuGrasDonker;
   Utils.fillEllipse(canvas.width * 0.2, canvas.height * 0.96, 700, 330);

   //tweede heuvel
   const kleurGrasMid = Utils.hsl(120, 100, 20);
   context.fillStyle = kleurGrasMid;
   Utils.fillEllipse(canvas.width * 0.5, canvas.height * 0.92, 700, 400);

   //derde heuvel
   const kleurGrasLicht = Utils.hsl(120, 50,30);
   context.fillStyle = kleurGrasLicht;
   Utils.fillEllipse(canvas.width * 0.8, canvas.height * 0.98, 600, 360);
}
//huis op heuvel tekenen
function tekenHuisOpHeuvel() {
  const huisBreedte = 100;
  const dakHoogte = 50;
  const huisHoogte = 80;

  //basis
  context.fillStyle = Utils.rgb(200,150,100);
  context.fillRect(canvas.width * 0.5 - huisBreedte / 2, canvas.height * 0.5 - huisHoogte, huisBreedte ,huisHoogte); //tekenen op papier voor berekening

  //deur van huis
  context.fillStyle = Utils.rgb(100,50,0); 
  context.fillRect(canvas.width * 0.5 -20, canvas.height * 0.5 - huisHoogte + 20, 40 , 60) ;

  //ramen
  context.fillStyle = Utils.rgb(255,255,255); 
  context.fillRect(canvas.width * 0.5 - 46, canvas.height * 0.5 - huisHoogte + 20 ,20 ,20);
  context.fillRect(canvas.width * 0.5 + 26, canvas.height * 0.5 - huisHoogte + 20,20 ,20);

  //dak
  context.fillStyle = Utils.rgb(150,75,0);
  context.beginPath();
  context.moveTo(canvas.width * 0.5 - huisBreedte / 2, canvas.height * 0.5 - huisHoogte);
  context.lineTo(canvas.width * 0.5, canvas.height * 0.5 - huisHoogte - dakHoogte); 
  context.lineTo(canvas.width * 0.5 + huisBreedte / 2, canvas.height * 0.5 - huisHoogte);
  context.closePath();
  context.fill();
}
function startStarAnimation(){
   
   initVallendeSterren(20);
   tekenVallendeSterren();
}

startStarAnimation();
