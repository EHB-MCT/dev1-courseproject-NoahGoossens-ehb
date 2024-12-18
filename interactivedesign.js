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
   
   context.fillStyle = Utils.hsl(120,50,40);
   context.fillRect(0,0,width,height * 0.3); //
}

