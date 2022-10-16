const prompt = require("prompt-sync")({ sigint: true });
// IF / Else IF / Else
// If ternario 
// Switch




















/* ¿Puede subir?

1. En un parque de diversiones nos piden un programa para verificar si los pasajeros de la 
montaña rusa pueden subir al juego.
Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si 
viene acompañada. 
Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, 
basado en las siguientes condiciones:
a. Debe medir más o igual de 1,40m y menos de 2 metros.
b. Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
c. Si mide menos de 1,20m, no podrá subir ni acompañado.
 */


function puedeSubir(altura, acompanado){

    if((altura >= 1.40 && altura < 2) || (altura < 1.40 && altura>1.20 && acompanado === true)){   
        return true;
    }
    else{
        return false;
    }

}

let acceso = puedeSubir(1.3 , true);
console.log(acceso);



/*
let edad = 18;

if(edad > 18){
    console.log("es mayor de edad");
}
else if(edad === 18){
    console.log("Tiene 18 años");
}
else{
    console.log("no es mayor de edad");
}

*/



let num = 4;

if(num > 10){
    console.log("es mayor")
}
else{
    console.log("es menor")
    
}

//If ternario 

// condicion ? lo que quiero es true : lo que quiero es false

(num > 10) ? console.log("es mayor") : console.log("es menor") ;


