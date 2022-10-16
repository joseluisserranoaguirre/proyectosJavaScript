const prompt = require("prompt-sync")({ sigint: true });


/* let notas = [9,7,10,5];


for(let i=0 ; i < notas.length ; i++){
    //notas[i] = notas[i]+1;
    notas[i] += 1;
    console.log(notas[i]);
}

console.log(notas); */



//console.log(notas[2]);

//notas[3] = 8;

//console.log(notas);

//let saludo = "Hola!";

//console.log(saludo[3]);

//let miArray= [45, "Hola", true];



/* let arrayCorreosPendientes = [
    'iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com', 'thanosdigitalhouse.com','thanos@digitalhouse.com'];
 

  let arrayCorreosAdmitidos = [
       'thor@digitalhouse.com',
      'tucuMan@digitalhouse.com',
      'wanda@digitalhouse.com'
  ];

  let arrayCorreosDescartados = [];


for(let i=0 ; i<= arrayCorreosPendientes.length - 1 ; i++){

    if(arrayCorreosPendientes[i].indexOf("@") === -1){
        arrayCorreosDescartados.push(arrayCorreosPendientes[i]);
    }
    else{
        arrayCorreosAdmitidos.push(arrayCorreosPendientes[i]);
    }
}


console.log(arrayCorreosAdmitidos);
console.log(arrayCorreosDescartados); */

/* let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])


let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5])

let str = "un string cualquiera"
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1])
 */

/* 1.CREAR LA ESTRUCTURA ADECUADA PARA GUARDAR LAS SIGUIENTES PELÍCULAS:
"STAR WARS", "TOTORO", "ROCKY", "PULP FICTION", "LA VIDA ES BELLA"
IMPORTANTE: VERIFICÁ QUE TODO FUNCIONA CORRECTAMENTE ACCEDIENDO A ALGUNA DE
LAS PELÍCULAS UNA VEZ CREADA LA ESTRUCTURA CORRESPONDIENTE. */



/* let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"] */



/* console.log(peliculas[0].toUpperCase() + "-"+ peliculas[1].toUpperCase()); */


/* 2. MÁS TARDE, DE PRODUCCIÓN DIERON EL AVISO DE QUE LAS PELÍCULAS DEBERÍAN ESTAR TODAS
EN MAYÚSCULAS. PARA ESTO SOLICITAN QUE CREES UNA FUNCIÓN QUE RECIBA POR
PARÁMETRO UN ARRAY Y CONVIERTA EL CONTENIDO DE CADA ELEMENTO A MAYÚSCULAS.
PISTA: REVISÁ QUÉ HACE EL MÉTODO DE STRINGS .TOUPPERCASE(). */

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
 
function peliculasMayuscula(peliculas){
   let peliculasEnMayuscula = peliculas[0].toUpperCase()+", " +peliculas[1].toUpperCase()
   +", " +peliculas[2].toUpperCase()+", " +peliculas[3].toUpperCase()+", " +peliculas[4].toUpperCase();

   return peliculasEnMayuscula.split(',')
   
}

let peliculas2 = peliculasMayuscula(peliculas);

/* Mientras trabajabamos en la feature anterior, se dio el aviso de que también
hay que crear otra estructura similar a la primera pero con las siguientes
películas animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto nos piden crear una función que reciba dos arrays como
parámetros, para poder agregar los elementos contenidos en el segundo array,
dentro del primero para así retornar un solo array con todas las películas como
sus elementos.
Importante: las pelis animadas también deberían convertirse a mayúsculas!
 */


let peliculasAnimadas = ["toy story", "finding nemo", "kun-f panda", "wally", "fornite"]
let videoJuego = ((peliculasAnimadas.pop()).toUpperCase());

function arrayPelis(peliculas2, peliculasAnimadas){
    let peliculasEnMayuscula2 = peliculasAnimadas[0].toUpperCase()+", " +peliculasAnimadas[1].toUpperCase()
    +", " +peliculasAnimadas[2].toUpperCase()+", " +peliculasAnimadas[3].toUpperCase()/* +", " +peliculasAnimadas[4].toUpperCase() */;

    return ( peliculas2 + ", "+ peliculasEnMayuscula2 ).split(', ')
}
console.log(arrayPelis(peliculas2, peliculasAnimadas)); 
console.log(videoJuego + ": no es una pelicula, es un videojuego");

/* PRUEBA PARA ADICIONAR UN ELEMENTO  */
/* let prueba = [ "hola", "aja"]
prueba.push(videoJuego);
console.log(prueba); */

/* let array1 =["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let array2 = ["toy story", "finding nemo", "kun-f panda", "wally", "fornite"]
function pasajeDeElementos(array1, array2) {
    array1.push(array2)
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    return array1
    }
    console.log(pasajeDeElementos(array1,array2)); */

 
/* **************CODIGO COMPLETO HASTA LA CUARTA********************
    let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
 
    function peliculasMayuscula(peliculas){
       let peliculasEnMayuscula = peliculas[0].toUpperCase()+", " +peliculas[1].toUpperCase()
       +", " +peliculas[2].toUpperCase()+", " +peliculas[3].toUpperCase()+", " +peliculas[4].toUpperCase();
    
       return peliculasEnMayuscula.split(',')
       
    }
    
    let peliculas2 = peliculasMayuscula(peliculas);

    let peliculasAnimadas = ["toy story", "finding nemo", "kun-f panda", "wally", "fornite"]
let videoJuego = ((peliculasAnimadas.pop()).toUpperCase());

function arrayPelis(peliculas2, peliculasAnimadas){
    let peliculasEnMayuscula2 = peliculasAnimadas[0].toUpperCase()+", " +peliculasAnimadas[1].toUpperCase()
    +", " +peliculasAnimadas[2].toUpperCase()+", " +peliculasAnimadas[3].toUpperCase() *//* +", " +peliculasAnimadas[4].toUpperCase() */;

   /*  return ( peliculas2 + ", "+ peliculasEnMayuscula2 ).split(', ')
}
console.log(arrayPelis(peliculas2, peliculasAnimadas)); 
console.log(videoJuego + ": no es una pelicula, es un videojuego");
 */



