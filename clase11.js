const prompt = require("prompt-sync")({ sigint: true });
/*
let persona = {
    nombre : "Luciano",
    dni : 325693258,
    coloresFavoritos : ["Rojo", "Verde"],
    direccion : {
        calle : "Av. Colon",
        ciudad : "Mar del plata",
        codigoPostal : 7600
    },
    saludar : function(edad){
        return "Hola como estan? Soy " + this.nombre + " y tengo " + edad + " años";
    }
}

console.log(persona.saludar(35));
*/
//console.log(persona.coloresFavoritos[0]);
//console.log(persona.direccion.ciudad);

/*
let persona = {
	nombre: "juan pablo",
	edad: 29,
	esMayorDeEdad: true
}

persona.nombre = "Paula";

persona.profesion = "Programador";

console.log(persona);
*/

/*

function arregloDeObjetos(num){
    let arreglo = [];
    for(let i=1 ; i<=num ; i++){
        let objeto = {
            valor : i
        }
        arreglo.push(objeto);
    }
    return arreglo;
}

console.log(arregloDeObjetos(5));


*/

  let titular =prompt("Ingrese el nombre del titular:")
    let cantidad =Number(prompt("Ingrese el valor a depositar:"))
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];



let banco = {
    clientes : arrayCuentas,
    consultarCliente : function(titular/* ,deposito, retiro */){
        for(let i=0 ; i< this.clientes.length ; i++){
            if(titular === this.clientes[i].titularCuenta){
              /* this.clientes[i].saldoEnPesos += deposito;
              this.clientes[i].saldoEnPesos -= retiro; */
                return this.clientes[i];
            }
        
        }
        return "No encontre nada"
        
    },
     deposito : function (titular, cantidad) {
      
        if (this.consultarCliente(titular).titularCuenta===titular){
          this.consultarCliente(titular).saldoEnPesos+= cantidad
          return "hola, su nuevo saldo es: " + this.consultarCliente(titular).saldoEnPesos
          
        }
       
        
    } 

} 

console.log(banco.deposito(titular, cantidad));




/* Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”. */



/* Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”. */





  







