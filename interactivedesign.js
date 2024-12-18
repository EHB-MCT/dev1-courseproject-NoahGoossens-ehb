"use strict";
import context from "/scripts/context.js";
import * as Utils from "/scripts/utils.js";

const width = context.canvas.width;
const height = context.canvas.height;

tekenAchtergrond();

//achtergrond functies instellen
function tekenAchtergrond() {
   //kleur instellen voor achtergrond  

   context.fillStyle = Utils.hsl(210 , 50 ,10);
   context.fillRect(0,0,width,height * 0.7); //70% is lucht 30 is land (gras)


   //grasveld
   
   const kleurGras = Utils.hsl(120, 50, 40);
   context.fillStyle = kleurGras;
   
   //heuvels van grasveld voor diepte
   context.beginPath();
   context.moveTo(0, canvas.height * 0.7);

   //eerste heuvel
   Utils.fillEllipse(canvas.width * 0.2, canvas.height * 0.8, 800, 330);

   //tweede heuvel
   Utils.fillEllipse(canvas.width * 0.5, canvas.height * 0.75, 980, 200);

   //derde heuvel
   Utils.fillEllipse(canvas.width * 0.8, canvas.height * 0.7, 700, 400);

   

   


}

