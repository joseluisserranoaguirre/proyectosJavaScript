let personas= [
    {
        nombre: "jose luis",
        apellido:"serrano aguirre",
        edad: 31,
        estadoCivil: "soltero"
    },
    {
        nombre: "andrea",
        apellido:"de oña",
        edad: 31,
        estadoCivil: "soltera"
    },
    {
        nombre: "luisa",
        apellido:"labachuco",
        edad: 28,
        estadoCivil: "soltera"
    },
    {
        nombre: "sofia",
        apellido:"lopez",
        edad: 27,
        estadoCivil: "casada"
    }

]

function ordenar (arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        for (let j=0; j< arreglo.length-1; j++) {
            if(arreglo[j].apellido > arreglo[j+1].apellido){

                let aux= arreglo[j];
                arreglo[j]=arreglo[j+1];
                arreglo[j+1]= aux;
            }
            
        }
        
    }return arreglo

}
let ordenado = ordenar(personas);

console.log(ordenado);
console.log("***************************");

/* function b(array, porApellido){

    let inicio = 0;

    let final = array.length - 1;

    while(inicio <= final){

        let indiceMitad = Math.round((inicio+final)/2);

        let elementoMitad = array[indiceMitad].apellido;

        if(elementoMitad === porApellido){
            return array[indiceMitad];
        }        
    }
    return " no coinside con ninguna persona registrada";
}

console.log(b(ordenado,"lopez")); */




/* function estadoCivil (array, porEstadoCivil){
    let conteo = 0

    let inicio = 0;

    let final = array.length - 1;

    while(inicio <= final){

        let indiceMitad = Math.round((inicio+final)/2);
                                    
        let elementoMitad = array[indiceMitad].estadoCivil;
        
        if(elementoMitad === porEstadoCivil){
            conteo+=1
        }else{
            return "nose puede contar"
        }       
    }
    return conteo
   
}
estadoCivil(ordenado,"casada")

console.log(conteo); */



function estadoCivil(array, porEstado){
    let conteo =0
    for (let i = 0; i < array.length; i++) {
        if(array[i].estadoCivil=== porEstado){
            conteo++
        }
        
    }return conteo
}

console.log(estadoCivil(ordenado, "soltera"));
