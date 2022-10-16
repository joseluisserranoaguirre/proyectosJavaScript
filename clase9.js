const prompt = require("prompt-sync")({ sigint: true });

/* Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().
 */


/* let Eleccion = prompt("Por favor ingrese una frase ");

function frase (Eleccion){
    return Eleccion

}

 console.log(frase(Eleccion)) */

 /* Escribí un programa que le pregunte al usuario su nombre e
 imprima "Hola " seguido del nombre y un signo de
 exclamación.
 Por ejemplo, si el usuario ingresa "Pedro" el programa debe
 imprimir en la consola "Hola Pedro!". */

 /* let nombre = prompt("Por favor ingrese una nombre ");

 console.log("hola " + nombre + " ! "); */

 /* Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario. */

/* let numero1 = parseInt ( prompt  ("Por favor ingrese un numero "));
let numero2 = Number (prompt ("Por favor ingrese otro numero "));

function suma (numero1, numero2){
    return numero1 + numero2
}
let resultadoSuma = suma(numero1,numero2)
console.log(resultadoSuma); */

/* let numero1 =  prompt  ("Por favor ingrese un numero ");
let numero2 = prompt ("Por favor ingrese otro numero ");

function suma (numero1, numero2){
    return Number (numero1) + Number (numero2)
}
let resultadoSuma = suma(numero1,numero2)
console.log(resultadoSuma); */


/* Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario */

/* let nacimiento =  prompt  ("Por favor ingrese su año de nacimiento:  ");
let currentTime = new Date();
let year = currentTime.getFullYear() */
/* console.log(year); */

/* function anioNacimiento (nacimiento){
    return year - Number (nacimiento)

}
 let resultadoNacimiento= anioNacimiento(nacimiento) */
 /* console.log("Tienes " + resultadoNacimiento + " años"); */

 /* console.log(`Tienes ${resultadoNacimiento} años `); */

/*  Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!" */




/* function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let resultadoRandom= random(1, 10);

console.log(resultadoRandom);

let numeroAleatorio = Number( prompt  ("Ingrese un numero del 1 al 10 :"));
if (numeroAleatorio>10 || numeroAleatorio<1){
    console.log("Ingrese un numero correcto");
}
else if(resultadoRandom == numeroAleatorio ){
   console.log("Felicitaciones,ese era!");
} else {
   console.log( "Lo siento, intenta nuevamente!");
}

 */

/* Escribí un programa que imprima los números pares del 0 al
100. */

/* function paresHasta(){
    
    for (let i = 0; i <= 100; i++) {
    if ((i % 2) === 0) {
        console.log(i);
        
    }

}

} paresHasta() */


/* Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras. */

/* let num = Number (prompt("Ingrese numero de hasta dos cifras: "))

function cuantoFalta (num){

    if (num >= 100){

        console.log("Ingrese un numero válido");
    }
    else if (num < 10){
         console.log(` le falta  ${10 - num} para ser un numero de dos cifras` );
    }else if (num < 100){
        console.log(`le falta ${100 - num} para ser un numero de tres cifras ` );
    }

}

cuantoFalta(num) */



/* 8) Hacer un algoritmo que muestre el promedio de varias notas o
de N notas ingresadas, se debe definir el valor de N para
conocer la cantidad de notas a ingresar.*/

/* let n = Number (prompt("Cuantas notas va a ingresar? : "))
function promedio (n){
   let notas= 0 

    for (let i = 1; i <= n ; i++) {
     
        let nota = Number(prompt("Ingrese nota: ")) 
        notas += nota 
        
    } 

   console.log(`el promedo de su nota es ${notas/n} `);

}



promedio(n) */




/* 9) Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado. */


/* let n = 0
for (var i = 0; i < 9; i++) {
    n += i;
    console.log(n);
 }
 */

 /* function loro(texto){
    
    for (let i = 0; i <= 4; i++) {
       
        console.log (texto)
    } 
   
} loro("texto") */

function noParesDeContarImparesHasta(numero){
    let contandoImpares = 0;
    for (let i = 0; i <= numero; i++) {
    if ((i % 2) !== 0) {
        contandoImpares = contandoImpares + 1;
    }
}
console.log(contandoImpares); 
} noParesDeContarImparesHasta(10)