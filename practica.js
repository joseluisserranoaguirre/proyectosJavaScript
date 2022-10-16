const prompt = require("prompt-sync")({ sigint: true });

/* . Realizar una función que reciba por parámetro un valor y retorne su tipo de dato.
(recorda utilizar typeOf).*/

/* function tipoValor(valor){
    
    return typeof valor 
} 
console.log(tipoValor(1)); */


/*2. Realizar una función que reciba por parámetro dos valores numéricos y retorne el
mayor. En caso de recibir algo distinto a un número, retornar “Usted se ha equivocado”.*/
 /* 
function mayor (numero1,numero2){
    
    if( (typeof numero1 !== 'number') || (typeof numero2 !== 'number') ){
        return "usted se equivocó"

    }else if(numero1>numero2){
        return numero1
    } else {
        return numero2
    }
} console.log(mayor(6,8)); */

/*
3. Realizar una función que reciba por parámetro un arreglo de números y aumente cada
elemento en diez unidades.*/

/* let numeros=[1,2,3,4,5]

function aumento (numeros){
    numeros[0]+=10
    numeros[1]+=10
    numeros[2]+=10
    numeros[3]+=numeros[3]+10
    numeros[4]+= numeros[4]+10
    return numeros
}

console.log( aumento(numeros)); */



/*
/*
3. Realizar una función que reciba por parámetro un arreglo de números y aumente cada
elemento en diez unidades.*/


/* let numeros=[1,2,3,4,5,7,8,9,10,11,12]

function aumento (numeros){
    
    for (let i = 0; i < numeros.length; i++) {
         numeros[i]+=10;
         
    }return numeros
    
}  
console.log(aumento(numeros)); */



/*
4. Realizar una función que reciba por parámetro un arreglo de números y retorne el
mayor de ellos.*/


     
let arreglo = [3 , 6, 20, 56, 32, 5, 89, 32, 100];
function mayor(arreglo){

    let numeroMayor = Number.POSITIVE_INFINITY;
     
    for(i = 0; i < arreglo.length; i++){
        if (arreglo[i] < numeroMayor)
        {
            numeroMayor = arreglo[i];
        }
    }
    return numeroMayor
     
    
}   
console.log(mayor(arreglo));
       
    
    

  
/*
5. Crear un arreglo llamado “mascotas” y guardar dentro de él 5 objetos cuyos atributos
sean: nombre, apodo y edad. Luego, deberán crear un método para cada objeto que se
llame pasoUnAño que aumente en una unidad todas las edades.*/

/* let mascotas =[
    {
    nombre: "koby",
    apodo: "negro",
    edad: 5,
    pasoUnAnio : function (){
        return this.edad=this.edad + 1
          
      },
    },
    {
        nombre: "manolo",
        apodo: "niño",
        edad: 12,
        pasoUnAnio : function (){
            return this.edad=this.edad + 1
              
          },
        },
        {
            nombre:"enzo",
            apodo: "ojon",
            edad: 1,
            pasoUnAnio : function (){
                return this.edad=this.edad + 1
                  
              },
            },
            {
                nombre:"mateo",
                apodo: "mateito",
                edad: 1,
                pasoUnAnio : function (){
                    return this.edad=this.edad + 1
                      
                  },
                },
                {
                    nombre:"simon",
                    apodo: "simontolomeo",
                    edad: 1,
                    pasoUnAnio : function (){
                      return this.edad=this.edad + 1
                        
                    }
                    

                    }, 
                    
                    
]; mascotas[0] .pasoUnAnio()
mascotas[1] .pasoUnAnio()
mascotas[2] .pasoUnAnio()
mascotas[3] .pasoUnAnio()
mascotas[4] .pasoUnAnio()
console.log(mascotas); */





/*
6. Crear un objeto llamado persona con los atributos que desees. Luego, crear un método
llamado presentación que se encargue de mostrar todos los valores guardados en su
atributo.*/
 /* let persona={
    nombre:"jose luis",
    
    nacionalidad: "colombiano",
    profesion: "developer",
    fullstack: false,
     presentacion: function(){
        return this.persona

    } 

 }; 
 */


/*
7. Dado el objeto creado en el ejercicio 6, agregar un atributo llamado edad y realizar una
función fuera de este objeto que reciba por parámetro su edad e indique si puede
conducir o no (para poder conducir debe ser mayor a 18 años).*/


/* persona.edad=17;

function conduccion(){
    if(persona.edad>18){
        return "Puede conducir"
    }else{
        return "Es menor de edad no puede conducir"
    }
}
console.log(conduccion(persona.edad)); */

/*
8. Dado el arreglo de objetos creado en el ejercicio 5, realizar una función que reciba por
parámetro este array y retorne un nuevo array que contenga solo aquellos objetos cuya
edad sean mayores a 3 años.*/

/* let mascotas =[
    {
    nombre: "koby",
    apodo: "negro",
    edad: 5,
    
    },
    {
        nombre: "manolo",
        apodo: "niño",
        edad: 12,
       
        },
        {
            nombre:"enzo",
            apodo: "ojon",
            edad: 1,
           
            },
            {
                nombre:"mateo",
                apodo: "mateito",
                edad: 1,
               
                },
                {
                    nombre:"simon",
                    apodo: "simontolomeo",
                    edad: 1,
                    

                    },
                    
                    
]; 

function mayores (mascotas){
    let nuevo= []
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].edad>3){
            nuevo.push(mascotas[i])
        }
        
    }return nuevo
   


} console.log(mayores(mascotas));
 */
/*
9. Realizar una función que reciba por parámetro un valor numérico. Si este es un numero
par y múltiplo de 5, entonces retornar true. Si en cambio, es un número impar o es
múltiplo de 3 entonces retornar “cumple con los requisitos”. Para cualquier otra
situación, retornar false.
*/
/* function resultados(numero){
    if (numero%2===0 && numero%5===0){
        return true
    }else if (numero%2!==0 || numero%3===0){
        return "cumple con los requisitos"
    }else{
        return false
    }

}

console.log(resultados(6)); */
/*
10. Dado el arreglo de objetos del ejercicio 5, realizar una función que reciba este array por
parámetro y permita agregar un nuevo atributo llamado colores. Este deberá contener
un array como valor. Luego, realizar un método para cada objeto que permita agregar
un nuevo color dentro de dicho array.  */

/* function nuevoAtributo (array){
    
    for (let i = 0; i < array.length; i++) {
        array[i].colores=[]
        
       array[i].nuevoColor=function(nuevoColor){
            this.colores.push(nuevoColor)  ;
            return this.colores

        }
    }
   
    
}

nuevoAtributo(mascotas)

mascotas[0].nuevoColor("rojo")
mascotas[0].nuevoColor("azul")
console.log(mascotas); */
