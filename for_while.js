const prompt = require("prompt-sync")({ sigint: true });

/* function loro(texto){
    let text = loro("hola soy un loro")


for(n=0; n<=5; n++){

   text += "hola soy un loro" + n

}
return text= ""

} console.log(text) */

/* var frase = "";
for (n = 0; n < 10; n++) 
	{ 
	frase += "El valor de n es " + n + "<br>"; 
	}
console.log(frase); */

/* function loro(texto){
    
    for (let i = 0; i <= 4; i++) {
        console.log (texto)
        
    }
    
} 
loro("Hola soy un loro") */

/* function modulo(x){
    return x % 2    
    
}
console.log(modulo(10)) */
 
/* function noParesDeContarImparesHasta(numero){
    let conteo = 0;
    for (let i = 0; i <= numero; i++) {
    if ((i % 2) !== 0) {
        conteo = conteo + 1;
    }
}
return conteo;
}

console.log(noParesDeContarImparesHasta(30)) */


function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí   
    
    let i = 1;
    while (i<=10) {
         
        console.log (numero + '*' + i + '=' + numero*i)
        i++
    } 
    
}
 tablaDeMultiplicar(3)



