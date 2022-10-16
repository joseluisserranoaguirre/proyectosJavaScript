
const prompt = require("prompt-sync")({ sigint: true });

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadHoras){
       this.energia= this.energia-cantidadHoras*5
      this.experiencia= cantidadHoras*2+this.experiencia

        return this.energia
        return this.experiencia
        
    }
};


console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
