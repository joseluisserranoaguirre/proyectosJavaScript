// 3. 
// A) Crear una matriz de 4 x 8 de numeros enteros 

let crearMatriz = (filas, columnas) => {

    let matriz = []

    for (let i = 0; i < filas; i++) {
        matriz.push([])
        for (let j = 0; j < columnas; j++) {
            matriz[i].push(Math.floor(Math.random() * 10))
        }   
    }

    return matriz
}

let matrizCreada = crearMatriz(4, 8)

console.table(matrizCreada);

// B) Crear una función que reciba la matriz generada por parámetro y retorne la sumatoria de todos los 
// valores excepto de la fila 0

let sumatoriaMatriz = (matriz) => {

    let sumatoria = 0;

    for (let i = 1; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            sumatoria += matriz[i][j]
        }   
    }

    return sumatoria
}

console.log(sumatoriaMatriz(matrizCreada));

// C) Crear una función que reciba la matriz generada por parámetro y un valor numérico. Deberá retornar 
// un array con todos los valores mayores al parámetro recibido como valor Numérico

let buscarMayores = (matriz, num) => {
    let mayores = []

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] > num && mayores.push(matriz[i][j])
        }   
    }

    return mayores
}

console.log(buscarMayores(matrizCreada, 5));