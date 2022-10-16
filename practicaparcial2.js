

/* let numeros =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]




function reordenar (matriz){
   
        for (let i = 0; i < matriz.length; i++) {
           for (let j = 0; j < matriz[i].length; j++) {
                
            
            let aux = matriz
             console.log(aux);
            matriz[i][j]=matriz[j][i]
            matriz[j][i]=aux
            
           }
            
        
        
    } 
    return matriz
   
}
console.log(reordenar(numeros)); */


/* . Desarrollar una función que genere una matriz, deberá recibir por parámetros la
cantidad de filas y columnas y retornar con valores secuenciales numéricos. */

/* function generarmatriz(fila,columnas){
    let matriz=[]
    let numeros = 1
    for (let i = 0; i < fila ; i++) {
       let fila=[]
       for (let j = 0; j < columnas; j++) {
        fila.push(numeros++)
        
       }
        matriz.push(fila)
    }return matriz

}
console.table(generarmatriz(8,6));



const personas =
[
{
nombre: "Arlene Barr",
legajo: 3955,
edad: 33,
},
{
nombre: "Roslyn Torres",
legajo: 3925,
edad: 27,
},
{
nombre: "Cleo Lopez",
legajo: 1965,
edad: 34,
},
{
nombre: "Daniel Malone",
legajo: 3925,
edad: 30,
},
{
nombre: "Ethel Leon",
legajo: 1915,
edad: 34,
},
{
nombre: "Harding Mitchell",
legajo: 1905,
edad: 25,
}
] */
/* - Desarrollar una función llamada orderAscLegajo que reciba por parámetro él
array de personas y realice un ordenamiento de forma ascendente
- Desarrollar una función llamada orderDescLegajo que reciba por parámetro
él array de personas y realice un ordenamiento de forma descendente
- Pensar de qué forma se puede realizar los dos ítems anteriores en una sola
función */

/* function orderAscLegajo(arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length-1; j++) {
            if(arreglo[j].legajo>arreglo[j+1].legajo){
                let aux = arreglo[j]
                arreglo[j]= arreglo[j+1]
                arreglo[j+1]=aux
            }
            
        }
        
    }
    return arreglo

}

console.log(orderAscLegajo(personas));

function orderDescLegajo(arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length-1; j++) {
            if(arreglo[j].legajo<arreglo[j+1].legajo){
                let aux = arreglo[j]
                arreglo[j]= arreglo[j+1]
                arreglo[j+1]=aux
            }
            
        }
        
    }
    return arreglo

}

function orden (orden,arreglo){
    if(orden==="ascendente"){
        return orderAscLegajo(arreglo);
    }else if(orden==="descendente"){
        return orderDescLegajo(arreglo)
    }
}
console.log(orden("descendente", personas));

 */
/* Teniendo 3 arrays:
fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]
Realiza las siguientes tareas:
- Crea una matriz con esta forma:
Luego, a partir de esta matriz, desarrollar una función que reciba la matriz por
parámetro y retorne lo solicitado:
- Función que reciba por parámetro la fila y retornar la suma de la misma.
- Función que retorne en un array la suma de las diagonales [15 , 15], sumando él
centro las dos veces
- Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]
- Función que retorne en un array los elementos mayores a 5
- Función que retorne un objeto literal con dos propiedades
pares : [4, 2, 8, 6], // array de pares
impares : [9, 3, 5, 7, 1], // array de impares */


let fila1 = [4,9,2]
let fila2 = [3,5,7]
let fila3 = [8,1,6]

let matrix = []
matrix.push(fila1,fila2,fila3)

let nueva = [[4,9,2],[3,5,7],[8,1,6]]

/* function suma (fila,matriz){
    let resultado= 0            
    for (let i = 0; i < matriz[fila].length; i++) {
       resultado+=matriz[fila][i]
        
    }return resultado
}
console.log(suma(0,matrix)); */



/* function sumaDiagonal (matriz){
    let diagonal1= 0
    let diagonal= 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(i+j);
            if(i===j){
                diagonal1+= matriz[i][j]   
            }           
        }        
    }for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(i+j);
            if((i+j) === matriz.length-1 ){
                diagonal = diagonal +matriz[i][j]               
            }           
        }        
    }
    let nuevoarreglo= []
    nuevoarreglo.push(diagonal1,diagonal)
    return nuevoarreglo
}

console.log(sumaDiagonal(nueva)); */

/* function sumaDiagonal (matriz){
    let diagonal1= 0
    let diagonal= 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            if(i===j){
                diagonal1+= matriz[i][j]
                if(i===j&&(i+j) === matriz.length-1){
                    diagonal = diagonal +matriz[i][j]  
                }   
            }else if((i+j) === matriz.length-1){
                diagonal = diagonal +matriz[i][j]               
            }           
        }        
    }let nuevoarreglo= []
    nuevoarreglo.push(diagonal1,diagonal)
    return nuevoarreglo
                      
        }        
console.log(sumaDiagonal(matrix));

 */

function pares (matriz){
    let nuevoArreglo=[]
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j]%2===0){
                nuevoArreglo.push(matriz[i][j])
            }
            
        }
        
    }return nuevoArreglo
}

console.log(pares(matrix));

function mayor (matriz){
    let nuevoArreglo=[]
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j]>5){
                nuevoArreglo.push(matriz[i][j])
            }
            
        }
        
    }return nuevoArreglo
}

console.log(mayor(matrix));

function impares (matriz){
    let nuevoArreglo=[]
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j]%2!==0){
                nuevoArreglo.push(matriz[i][j])
            }
            
        }
        
    }return nuevoArreglo
}

console.log(impares(matrix));

function objeto(matriz){
    let objetoNuevo={}
 objetoNuevo.pares=pares(matriz)
 objetoNuevo.impares =impares(matriz)
 return  objetoNuevo
}
console.log(objeto(matrix));

