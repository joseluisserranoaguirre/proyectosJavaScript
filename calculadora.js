const prompt = require("prompt-sync")({ sigint: true });

let suma = (x,y) => x + y;
let resta = (x,y) => x - y;
let multiplicacion = (x,y) => x * y;
let division = (x,y) => x / y;

let valorSuma1 = Number(prompt("Ingrese primer valor "));
let valorSuma2 = Number(prompt("Ingrese segundo valor "));
let resultadoSuma = suma(valorSuma1,valorSuma2);
 console.log(resultadoSuma);

let valorResta1 = Number(prompt("Ingrese primer valor "));
let valorResta2 = Number(prompt("Ingrese segundo valor "));
let resultadoResta = resta(valorResta1,valorResta2);
console.log(resultadoResta);

let valorMultiplicacion1 = Number(prompt("Ingrese primer valor "));
let valorMultiplicacion2 = Number(prompt("Ingrese segundo valor "));
let resultadoMultiplicacion = multiplicacion(valorMultiplicacion1,valorMultiplicacion2);
 console.log(resultadoMultiplicacion);

 let valorDivision1 = Number(prompt("Ingrese primer valor "));
 let valorDivision2 = Number(prompt("Ingrese segundo valor "));
 let resultadoDivision = division(valorDivision1,valorDivision2);
console.log(resultadoDivision);

  let cuadradoDeUnNumero = (x) => multiplicacion (x,x);
  let valorCuadrado = Number(prompt("Ingrese numero ")); 
  let resultadoCuadrado = cuadradoDeUnNumero(valorCuadrado);
  console.log("El cuadrado del numero ingresado es: " + resultadoCuadrado );

  let promedioDeTresNumeros = (x,y,z) => division ((x+y+z),3);
  let valor1 = Number(prompt("Ingrese numero ")); 
  let valor2 = Number(prompt("Ingrese numero ")); 
  let valor3 = Number(prompt("Ingrese numero ")); 
  let resultadoPromedio = promedioDeTresNumeros(valor1,valor2,valor3);
  console.log("El promedio de los numeros ingresado es: " + resultadoPromedio );

  let calcularPorcentaje = (x,y) => division( multiplicacion(x,y) , 100 )
  let valorTotal = Number(prompt("Ingrese valor total; "));
  let valorPorcentaje = Number(prompt("Ingrese porcentaje a calcular: "));
  let resultadoPorcentaje = calcularPorcentaje(valorTotal, valorPorcentaje);
  console.log("El porcentaje del numero ingresado es: " + resultadoPorcentaje);


