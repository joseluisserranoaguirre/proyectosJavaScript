/* Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

let mayor =[{username:"aaaaa",likes:89000},
{username :"bbbbb",likes:20000},{username :"aaaaa",likes:35550},{username :"aaaaa",likes:4506},{username :"aaaaa",likes:3000},{username :"aaaaa",likes:5334},{username :"aaaaa",likes:857696},{username :"aaaaa",likes:93939},{username :"aaaaa",likes:5888},{username :"aaaaa",likes:20294},{username :"aaaaa",likes:3939384},{username :"aaaaa",likes:949485},{username:"aaaaa",likes:949494},{username :"aaaaa",likes:40404},{username :"aaaaa",likes:595959}]


function likes (arreglo) {

    
        
       
        for (let i = 0; i < arreglo.length; i++) {    
            
            for (let i = 0; i < arreglo.length - 1; i++) {
               if(arreglo[i].likes<arreglo[i+1].likes){
                let aux = arreglo[i]
                arreglo[i]= arreglo [i+1]
                arreglo[i+1]=aux
                
               }
                
            }
            } 
                let podio = []                
            for (let k = 0; k < arreglo.length; k++) {
                if(k<3){
                    podio.push(arreglo[k])                    
                }else if(k===arreglo.length-1)
                podio.push(arreglo[arreglo.length-1])
            }
            
            console.log(podio);
            
    }
     likes(mayor);



/*
Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */

let temperaturas =[
    {
        dia: 1,
        mes: 1,
        tempMax :36,
        tempMin :27
    },
    {
        dia: 2,
        mes: 1,
        tempMax :35,
        tempMin :26
    },
    {
        dia: 3,
        mes: 1,
        tempMax :32,
        tempMin :25
    },
    {
        dia: 4,
        mes: 1,
        tempMax :28,
        tempMin :21
    },
    {
        dia: 5,
        mes: 1,
        tempMax :35,
        tempMin :26
    },

]


function tempMin (arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length - 1; j++) {
            if (arreglo[j].tempMin>arreglo[j+1].tempMin) {                
                let aux = arreglo[j]
                arreglo[j]= arreglo[j+1]
                arreglo[j+1]= aux
            }
            
        }
        
    }
    return arreglo

}
console.log(tempMin(temperaturas));


function tempMax (arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length - 1; j++) {
            if (arreglo[j].tempMax<arreglo[j+1].tempMax) {                
                let aux = arreglo[j]
                arreglo[j]= arreglo[j+1]
                arreglo[j+1]= aux
            }
            
        }
        
    }
    return arreglo

}
console.log(tempMax(temperaturas));




