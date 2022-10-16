let ordenado = [1,2,3,4,5,6,7,9,8]
let desordenado = [4,6,9,8,2,5,3,1,7]


function ordenamiento (array){
    let contador = 0
      
    for (let i = 0; i < array.length; i++) {
         
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j]>array[j+1]) {
                let aux = array[j]
                array[j]=array[j+1]
                array[j+1]= aux  
                contador += 1             
            }
            
            
        }
        
    }          
            if (contador>0) {
                return false
            }else {
                return true
            }
                  
    }
    
        
console.log(ordenamiento(ordenado));