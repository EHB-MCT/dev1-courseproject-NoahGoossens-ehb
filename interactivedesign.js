"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";



//achtergrond functies instellen
function tekenAchtergrond() {
   //kleur instellen voor achtergrond  
   const kleurHemel = hsl(210 , 50 ,10);
   context.fillStyle = kleurHemel; 
   context.fillRect(0,0,canvas.width,canvas.height * 0.7); //70% is lucht 30 is land (gras)
}

//grasveld
function tekenGrasveld() {

}

//sterren
function tekenSterren() {

}


tekenAchtergrond();