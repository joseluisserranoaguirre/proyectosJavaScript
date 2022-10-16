 

function generarMatriz10por10() {
	let matriz=[]
		
	for (let i = 0; i < 100; i+=10) {
		
		let fila=[]
	
	for (let j = 1; j <=10; j++){
		
			fila.push(i+j)			
		
		
	}
	matriz.push(fila)
}
return matriz
}
console.table(generarMatriz10por10())

/*
function sumaRojo (matriz){
	let sumaRojo=0
	for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz[i].length; j++) {
			if(i===j){
				sumaRojo += matriz[i][j]
				console.log(sumaRojo);
			}
			 
			
		}
		
	}
	return matriz

}
sumaRojo(matrizFinal);
console.log("**************************************");
console.log("**************************************");


function sumaVerde (matriz){
	let sumaVerde=0
	for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz[i].length; j++) {
			if(i+j===matriz.length-1){
				sumaVerde += matriz[i][j]
				console.log(sumaVerde);
			}
			 
			
		}
		
	}
	return matriz

}


sumaVerde(matrizFinal);
 */

/* let mes =[
[1135,
 2500,
 900,
 1600,
 2800,
 3650,
 1111100
],
[
 1750,
 1890,
 1900,
 1300,
 898,
 1750,
 800000000
],
[ 
 1700,
 1150,
 1690,
 1900,
 1770,
 4500,
 2560
],
[ 
 800,
 1250,
 1430,
 2100,
 1980,
 1270,
 39950
]

]


function controlGastos (matriz1,Semana){
	let sumaSemana = 0
	numeroSemana = Semana-1
	for (let i = 0; i < matriz1[numeroSemana].length; i++) {
		
			sumaSemana += matriz1 [numeroSemana][i]
			
	
	}
	return sumaSemana
}

controlGastos (mes,4); 



function controlGastosDia (matriz1,Dia){
	let sumaDia = 0
	numeroDia = Dia-1
	for (let i = 0; i < matriz1.length; i++) {
		
			sumaDia += matriz1 [i][numeroDia]
			
		
		
		
		
	}
	return sumaDia
}
console.log(controlGastosDia(mes,2 ));



function gastoMes(matriz1){
	let totalMes = 0
	for (let i = 0; i < matriz1.length; i++) {
		for (let j = 0; j < matriz1[i].length; j++) {
			
			totalMes += matriz1 [i][j]
			
		}
		
	}return totalMes
} 

console.log(gastoMes(mes)); 



function mayorSemana (matriz1){
	let semanaMayor = 0
	let mayorSemana = 0
	
for (let i = 1; i < (matriz1.length)+1; i++) {
if(controlGastos(matriz1,i)> semanaMayor)	{
	semanaMayor = controlGastos(matriz1,i)
	mayorSemana = i

}

} 
return "la semana" +" "+ mayorSemana +" " + "fué la que tuvo mayor gasto con" + " " + " $ "+ semanaMayor+ " " + "pesos m/cte" 

  
}

console.log(mayorSemana(mes)); 




function mayorDia(matriz1){
	let diaMayor = 0
	let mayorDia = 0
	
for (let i = 1; i < (matriz1[0].length)+1; i++) {
if(controlGastosDia(matriz1,i)> diaMayor)	{
	diaMayor = controlGastosDia(matriz1,i)
	mayorDia = i

}

} 
return "el dia" +" "+ mayorDia +" " + "fué el que tuvo mayor gasto "

  
}

console.log(mayorDia(mes));
	
 */