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