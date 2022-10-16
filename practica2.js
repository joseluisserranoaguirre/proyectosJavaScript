const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
console.log(Math.min.apply(null,edades))
console.log(Math.max.apply(null,edades))
/*let nuevoArreglo=[];

let nuevoArreglo2= [];

function functionA(arreglo){
    for (let i=0; i< arreglo.length; i++){
        if(arreglo[i]<18){
            nuevoArreglo.push(arreglo[i])
        }
    }
    return nuevoArreglo
}

console.log(functionA(edades));


function functionB(arreglo){
    for (let i=0; i< arreglo.length; i++){
        if(arreglo[i]>=18){
            nuevoArreglo2.push(arreglo[i])
    
        }
    }
    return nuevoArreglo2
}
console.log(functionB(edades));

let nuevoArreglo3=[];
function functionC(arreglo){
    for (let i=0; i< arreglo.length; i++){
        if(arreglo[i]=18){
            nuevoArreglo3.push(arreglo[i])
    
        }
    }
    return nuevoArreglo3
}
console.log(functionC(edades));
let numeroMayor = 0 ;
let numeroMenor = numeroMayor

function obtenerMayor(arreglo){
    for(let i=0; i< arreglo.length; i++){
        let resultado = numeroMayor
        if(arreglo[i]>numeroMayor){
            numeroMayor = arreglo[i];
        } 
        if(arreglo[i]< resultado){
            numeroMenor = arreglo[i]
        }
    }
    return numeroMayor
    

}
console.log(obtenerMayor(edades))



function obtenerMenor(arreglo){;
    for(let i=0; i< arreglo.length; i++){
        if(arreglo[i]<numeroMenor){
            numeroMenor = arreglo[i]
        }
        
    }
    return numeroMenor
}

console.log(obtenerMenor(edades))

function promedioEdades(arreglo){
let sumatoria = 0
    for (let i= 0; i < arreglo.length; i++) {
        sumatoria = arreglo[i] + sumatoria
    }
    let resultado1 = sumatoria / arreglo.length
    return resultado1
}

console.log (promedioEdades(edades))

function aumentarUno(arreglo){
    for (let i= 0; i < arreglo.length; i++) {
        arreglo[i] += 1
}
return arreglo

}
console.log (aumentarUno(edades))  */

/*const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: true,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]

let nuevoArreglo= []

function functionA(arreglo){
    for (let i= 0; i < arreglo.length; i++){
        if (arreglo[i].edadTitular <30){
            nuevoArreglo.push(arreglo[i])
        }
    }
return nuevoArreglo
}

console.log(functionA(arrayCuentas))

console.log(Math.min.apply(null,arrayCuentas.edadTitular)) */
