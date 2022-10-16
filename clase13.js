//Crear un array llamado misMascotas 

let misMascotas = [];

/*Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
nombre
raza
edad 
sonido
un método que nos retorne ese sonido 2 veces
*/

let perro = {
  nombre : "Firu",
  raza : "pincher",
  edad : 2,
  sonido : "Guaf",
  sonidoDosVeces : function(){
    return this.sonido + " " + this.sonido;
  }
}

//console.log(perro.sonidoDosVeces())

let gato = {
  nombre : "Michi",
  raza : "gatito",
  edad : 8,
  sonido : "Miau",
  sonidoDosVeces : function(){
    return this.sonido + " " + this.sonido;
  }
}

let mono = {
  nombre : "Monito",
  raza : "chimpance",
  edad : 12,
  sonido : "wuwuuu wawa bananaaaa",
  sonidoDosVeces : function(){
    return this.sonido + " " + this.sonido;
  }
}

misMascotas.push(perro,gato,mono);

//console.log(misMascotas);


/*Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada 
animal en 1.
*/

function aumentarEdad(arreglo){

  for(let i=0 ; i< arreglo.length ; i++){
    arreglo[i].edad += 1;
    //arreglo[i].edad = arreglo[i].edad + 1;
    //arreglo[i].edad++;
  }
  return arreglo;
}

//let nuevoArreglo = aumentarEdad(misMascotas);
//console.log(nuevoArreglo);

/*Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
*/


function aumentarEdad2(arreglo){

  for(let i=0 ; i<arreglo.length ; i++){

    if(arreglo[i].edad < 6 && arreglo[i].edad > 0){
      arreglo[i].edad++;
    }
    else if(arreglo[i].edad >= 6 && arreglo[i].edad <= 10){
      arreglo[i].edad += 2;
    }
    else if(arreglo[i].edad > 10){

      let mitad = arreglo[i].edad / 2;
      arreglo[i].edad = arreglo[i].edad + mitad;

      //arreglo[i].edad = arreglo[i].edad + (arreglo[i].edad/2);
    }
    else{
      return "Ingresaste cualquier cosa :D"
    }
  }
  return arreglo;
}

//let nuevoArreglo2 = aumentarEdad2(misMascotas);
//console.log(nuevoArreglo2);


/*Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, 
que será secuencial y que empezará en 1. */

function agregarId(arreglo){

  for(let i=0 ; i<arreglo.length ; i++){

    arreglo[i].identificador = i+1;

  }
  return arreglo;
}

//let nuevoArreglo3 = agregarId(misMascotas);
//console.log(nuevoArreglo3);

/*Por último eliminaremos la propiedad ‘raza’ , ya que para nosotros todos los 
animalitos son iguales
*/


function eliminarRaza(arreglo){

  for(let i=0 ; i<arreglo.length ; i++){
    delete arreglo[i].raza;
  }

  return arreglo;
}

let nuevoArreglo4 = eliminarRaza(misMascotas);
console.log(nuevoArreglo4);









