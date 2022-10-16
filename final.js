/* Ejercicio 1
Dado él siguiente array de paises */
let paises = [
    {
      nombre: "Argentina",
      continente: "Sudamérica",
      poblacion: 40000000
    },
  {
      nombre: "Colombia",
      continente: "Sudamérica",
      poblacion: 50372000
    },
 
    {
      nombre: "Brasil",
      continente: "Sudamérica",
      poblacion: 300000000
    },
    {
      nombre: "Etiopía",
      continente: "África",
      poblacion: 15000000
    },
    {
      nombre: "Chile",
      continente: "Sudamérica",
      poblacion: 10000000
    }
  ];
/* Crear una función que reciba como parámetro un arreglo de objetos, un continente, y un número de población.
La misma debe retornar un nuevo arreglo solo con los países que sean del continente pasado por parámetro, y además, que su población sea mayor o igual a la del parámetro.
Si no encuentra coincidencias deberá retornar un array vacío */


function pais(arreglo,nombreContinente,nroPoblacion){
    let nuevoArreglo=[]
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i].continente===nombreContinente && arreglo[i].poblacion>=nroPoblacion){
            nuevoArreglo.push(arreglo[i])
        }
        
        
    }
    return nuevoArreglo
}
console.log (pais(paises,"Sudamérica",30000000));


/* Ejercicio 2
 Dado el siguiente array de numeros : */
 
  /* let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];
 
console.log(arrayDeNumeros); */

/* Crear una función llamada bubbleSort que reciba como parámetros el array y un string que represente el sentido de ordenamiento, la función deberá realizar un ordenamiento interno del array según el orden indicado 

“ASC” lo ordenará ascendente
“DESC” lo ordenará descendente
	
Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función.  */

/* function bubbleSort (arreglo,orden){
    if(orden=== "ASC"){
        for (let i = 0; i < arreglo.length; i++) {
            for (let j = 0; j < arreglo.length-1; j++) {
                if (arreglo[j]>arreglo[j+1]) {
                    let aux= arreglo[j]
                    arreglo[j]= arreglo[j+1]
                    arreglo[j+1]= aux
                }
            }
            
        }
        return arreglo
    }else if (orden==="DESC"){
        for (let i = 0; i < arreglo.length; i++) {
            for (let j = 0; j < arreglo.length-1; j++) {
                if (arreglo[j]<arreglo[j+1]) {
                    let aux2= arreglo[j]
                    arreglo[j]= arreglo[j+1]
                    arreglo[j+1]= aux2
                }
            }
            
        }
        return arreglo
    }
}

console.log(bubbleSort(arrayDeNumeros, "DESC")); */



/* Ejercicio 3
Dada la matriz  */
/* let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
]; */


/* Crear una función que reciba la matriz por parámetro, sume todos los valores de la fila 1 y retorne la suma.
Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */

/* function suma (matrix){
    let suma=0
    
        for (let j = 0; j < matrix[1].length; j++) {
            suma += matrix[1][j]
            
        }
        return suma 
        
    }
    console.log(suma(matriz)); */


   /*  function pares (matrix){
        let arrayPares= []
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j]%2===0) {
                    arrayPares.push(matrix[i][j])
                    
                }
            }
            
        }
        return arrayPares
    }
    console.log(pares(matriz));
 */
