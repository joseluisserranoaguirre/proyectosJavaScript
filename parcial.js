/* let ciclista ={
    nombre: "jose luis",
    apellido: "serrano aguirre",
    edad: 15,
    tieneBici: true

}

function resultado (objeto){

    if(objeto.tieneBici===false){
        return "no puede competir"
    }else if(objeto.edad>18&& objeto.tieneBici=== true){
        return "puede competir"
    }else if (objeto.tieneBici=== true && objeto.edad<18){
        return "podrá competir pero con un acompañante"
    
}
} console.log(resultado(ciclista)); */


let competidores=[];

let competidor1={
    nombre: "juan",
    edad: 42,
    kilometrosRecorridos: 80,
}
let competidor2={
    nombre: "sofia",
    edad: 22,
    kilometrosRecorridos: 90,
}
let competidor3={
    nombre: "maria",
    edad: 45,
    kilometrosRecorridos: 70,
}

competidores.push(competidor1,competidor2,competidor3)

console.log(competidores);


function competencia100km(arreglo){
    for (let i = 0; i < arreglo.length; i++) {
         arreglo[i].kilometrosRecorridos += 100
        
    }return arreglo
    
} console.log(competencia100km(competidores));


