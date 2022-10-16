/* Tenemos como base un array de cuentas bancarias, donde a cada una la
representamos con un objeto literal. A partir de este array trabajaremos sobre
los siguientes enunciados, resolviendo de la forma que nos parezca más
adecuada */
const arrayCuentas =
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
{

titular: "Ethel Leon",
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


/* a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.*/

/* function funcionA(arreglo1){
    let nuevoArreglo1=[];
    for (let i = 0; i < arreglo1.length; i++) {
        if (arreglo1[i].edadTitular<30){
            nuevoArreglo1.push(arreglo1[i])
        }        
    }
    return nuevoArreglo1
}
console.log(funcionA(arrayCuentas));
 */
/*
b. Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a
30.
*/
/* function funcionB (arreglo2){
    let nuevoArreglo2=[]
    for (let i = 0; i < arreglo2.length; i++) {
       if (arreglo2[i].edadTitular>=30){
        nuevoArreglo2.push(arreglo2[i]);
       }        
    }
    return nuevoArreglo2;
}
console.log(funcionB(arrayCuentas));
 */

/*
c. Obtener un nuevo array de cuentas cuyas edades sean menores o igual a
30.*/

/* function funcionC (arreglo3){
    let nuevoArreglo3=[]
    for (let i = 0; i < arreglo3.length; i++) {
       if (arreglo3[i].edadTitular<=30){
        nuevoArreglo3.push(arreglo3[i]);
       }        
    }
    return nuevoArreglo3;
}
console.log(funcionB(arrayCuentas)); */


/*
d. Obtener la cuenta con el titular de la misma más joven.
*/

function funcionD (arreglo4){
    let masJoven= Number.POSITIVE_INFINITY;
    let cuentaMasJoven=[]
    for (let i = 0; i < arreglo4.length; i++) {
        if(arreglo4[i].edadTitular<masJoven){
            masJoven=arreglo4[i].edadTitular
        }        
    }
    for (let i = 0; i < arreglo4.length; i++) {
        if(arreglo4[i].edadTitular=== masJoven){
            cuentaMasJoven= arreglo4[i].titular
        }
        
    }return cuentaMasJoven;

        
}
console.log(funcionD(arrayCuentas));


/*
e. Obtener un array con las cuentas habilitadas.
*/
function funcionE (arreglo5){
    let cuentasHabilitadas=[];
    for (let i = 0; i < arreglo5.length; i++) {
        if(arreglo5[i].estaHabilitada===true){
            cuentasHabilitadas.push(arreglo5[i])
        }
        
    }
    return cuentasHabilitadas
}
console.log(funcionE(arrayCuentas));



/*
f. Obtener un array con las cuentas deshabilitadas.
*/

function funcionF (arreglo6){
    let cuentasDeshabilitadas=[]
    for (let i = 0; i < arreglo6.length; i++) {
       if(arreglo6[i].estaHabilitada===false){
            cuentasDeshabilitadas.push(arreglo6[i])
       }
       
    }
    return cuentasDeshabilitadas;
}

console.log(funcionF(arrayCuentas));

/*
g. Obtener la cuenta con el menor saldo.
*/

function funcionG(arreglo7){
    let menorSaldo= Number.POSITIVE_INFINITY;
    for (let i = 0; i < arreglo7.length; i++) {
        if(arreglo7[i].saldo<menorSaldo){
            menorSaldo=arreglo7[i].saldo
        }
        
    }return menorSaldo;
}
console.log(funcionG(arrayCuentas));

/*
h. Obtener la cuenta con el mayor saldo.
 */

function funcionH (arreglo8){
    let mayorSaldo = 0
    for (let i = 0; i < arreglo8.length; i++) {
        if(mayorSaldo> arreglo8[i].saldo){
            mayorSaldo= arreglo8[i]
        }
        
    }
    for (let i = 0; i < arreglo8.length; i++) {
        
        
    }
}



console.log(funcionH(arrayCuentas));