"use strict";
import context from "/scripts/context.js";
import * as Utils from "/scripts/utils.js";

const width = context.canvas.width;
const height = context.canvas.height;

tekenAchtergrond();
tekenHuisOpHeuvel();
//achtergrond functies instellen
function tekenAchtergrond() {
   //kleur instellen voor achtergrond  

   context.fillStyle = Utils.hsl(210 , 50 ,10);
   context.fillRect(0,0,width,height * 0.7); //70% is lucht 30 is land (gras)


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

function tekenHuisOpHeuvel() {
  
}

