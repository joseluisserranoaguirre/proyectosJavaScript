let edades = [11, 12, 15, 18, 25, 22, 10, 33, 5,18];

/* 1.
a. Obtener en un nuevo array las edades menores a 18.
*/

/* function mayoresDeEdad (arreglo){
    let arregloNuevo=[]
    for (let i = 0; i < arreglo.length; i++) {
           if (arreglo[i]>18){
            arregloNuevo.push(arreglo[i])
           }
     }
     
     return arregloNuevo
}
 console.log(mayoresDeEdad(edades)) */
 

/*
b. Obtener en un nuevo array las edades mayor o igual a 18.
*/
/* function mayoresDeEdad2 (arreglo){
    let arregloNuevo1=[]
    for (let i = 0; i < arreglo.length; i++) {
           if (arreglo[i]>=18){
            arregloNuevo1.push(arreglo[i])
           }
     }
     
     return arregloNuevo1
}
 console.log(mayoresDeEdad2(edades)) */


/*
c. Obtener en un nuevo array las edades igual a 18.
*/
/* function mayoresDeEdad3 (arreglo){
    let arregloNuevo2=[]
    for (let i = 0; i < arreglo.length; i++) {
           if (arreglo[i]=18){
            arregloNuevo2.push(arreglo[i])
           }
     }
     
     return arregloNuevo2
}
 console.log(mayoresDeEdad3(edades))
 */


/*
d. Obtener el menor.
*/

/* function menor ( arreglo){
    let numeroMenor=Number.POSITIVE_INFINITY;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i]<numeroMenor){
            numeroMenor= arreglo[i]                
        }  
        
    }
    return numeroMenor
}

console.log(menor(edades)); */

/*
e. Obtener el mayor.
*/
/* function mayor (arreglo){
    let numeroMayor= 0
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i]>numeroMayor){
            numeroMayor= arreglo[i]
        }
        
    }
    return numeroMayor;
}

console.log(mayor(edades));
 */


/*

f. Obtener el promedio de edades.
*/

/* function promedio (arreglo){
    let promedio=0;
    for (let i = 0; i < arreglo.length; i++) {
       promedio += arreglo[i]
        
    }
    return promedio/arreglo.length;
}
console.log(promedio(edades)); */

/*
g. Incrementar en 1 todas las edades. */

/* function incremento(arreglo){
    for (let i = 0; i< arreglo.length; i++) { 
        arreglo[i]+=1
    }
    return arreglo
}
console.log(incremento(edades)); */