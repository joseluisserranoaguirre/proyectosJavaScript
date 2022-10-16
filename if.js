const prompt = require("prompt-sync")({ sigint: true });



function puedePasar(nombre){
    
    if(nombre ===  "Cosme Fulanito"){
     return false
 
 }else{
    return true
     
 }
 
 }
 console.log(puedePasar("Cosme Fulanit"))

 
 function puedeSubir (altura, acompanado){

    switch (altura, acompanado){
        case (altura >= 1.40 && altura < 2)||(altura >= 1.40 && altura < 1.20 && acompanado === true):
        return true;
            default:
            return false;
    }
 }
 