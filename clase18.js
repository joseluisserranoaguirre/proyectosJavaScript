
/* Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.
 */


let num = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
  ];

  function funcion (matriz){
    let suma = 0
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if(matriz[i][j]>=10 && matriz[i][j]<1000 ){

            suma += matriz[i][j]
        }             
    }    
}
return suma
}
console.log(funcion(num));