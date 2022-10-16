const prompt = require("prompt-sync")({ sigint: true });

/* let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join(" ");
  console.log(fraseNueva) */

  /* let frase = 'breaking bad rules!'

  let corte=frase.slice(-10)

  console.log(corte); */

  /* function dominio(string){
    return "http://www." + string
}
console.log( dominio("digitalhouse.com.ar")); */
/* 
function reemplazoFast (string1, string2, string3){
  let texto = (string1)
 let newtext= texto.replace  ( string2,string3)
 return newtext
}
console.log(reemplazoFast('hola como estas', 'estas', 'estoy')); */

/* function menciona (texto, palabra){
  let mencionaTexto= texto
  let palabraEncontrada = mencionaTexto.indexOf(palabra)
      
  if (palabraEncontrada === 15 ){
    return palabraEncontrada= true
  }else{
    return false
  }

} console.log( menciona('Existen muchos lenguaje de programación y JavaScript es uno de ellos','lenguajes')) */

function menciona (texto, palabra){
  let mencionaTexto= texto
  let palabraEncontrada = mencionaTexto.indexOf(palabra)
      
  if (palabraEncontrada !== -1 ){
    return palabraEncontrada= true
  }else {
      return false
  }

} console.log( menciona("Hola como estas?","como"))