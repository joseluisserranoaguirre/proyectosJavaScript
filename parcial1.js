/* Realizar una función que reciba por parámetro dos valores numéricos. Si el primer número es mayor al segundo y distinto de 0, entonces se deberá retornar true. En cambio, si el primer número es menor al segundo y múltiplo de 5 entonces se deberá retornar false. Si el primer y el segundo número son iguales, deberemos retornar un string que diga “los números recibidos son los mismos”. Para cualquier otra situación, retornar -1.  */

/* function comparacion (numero1,numero2){
    if ( numero1>numero2&& numero1!==0){
        return true
    }else if (numero1<numero2&& numero1%5===0){
        return false
    }else if (numero1===numero2){
        return "los números recibidos son los mismos"
    }else{
        return -1
    }
}
console.log(comparacion(0,0)); */


/* Realizar una función que nos ayude a determinar si un estudiante ha pasado una materia o no. Para esto, se recibirán por parámetro una nota de examen y un booleano que indicará si ha realizado las entregas solicitadas. Nuestra función deberá indicar la situación del alumno mediante el siguiente criterio:



Si su nota es mayor o igual a 7 y ha realizado las entregas, retornará “Ha pasado la materia”
*/


/*
Si su nota es mayor o igual a 7 y no ha realizado las entregas, retornará “Tiene tareas pendientes”
Si su nota es menor a 7 y ha realizado las entregas, retornará “Debe rendir recuperatorio”
Si su nota es menor a 7 y no ha realizado las entregas, retornará “Ha desaprobado la materia” */

function aprobado(nota,entrega){
    if(nota>=7 && entrega===true){
        return "Ha pasado la materia"
    }else if (nota>=7 && entrega===false){
        return "Tiene tareas pendientes"
    }else if (nota<7 && entrega===true){
        return "Debe rendir recuperatorio"
    }else if(nota < 7 && entrega===false){
        return "Ha desaprobado la materia"
    }
}
console.log(aprobado(7,1));


let personas = [
    {
        nombre : "Lucia",
        oficio : "Medica",
        edad : 37
    },
    {
        nombre : "Tiziano",
        oficio : "Programador",
        edad : 15
    },
    {
        nombre : "Julian",
        oficio : "Chofer",
        edad : 45
    },
    {
        nombre : "Adriana",
        oficio : "Chef",
        edad : 24
    },
]

/* A Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar un nuevo arreglo con las personas que cumplan con la condición antes mencionada.*/

/* function mayor (arreglo){
    let nuevoArregloMayores= []
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i].edad>25){
            nuevoArregloMayores.push(arreglo[i])
        }
        
    }
    return nuevoArregloMayores;
}

console.log(mayor(personas));
 */

/*
Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento.
 */