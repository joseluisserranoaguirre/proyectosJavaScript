let array= ['R','U','U','L','L','L','D','D','D','R']
function calcularMaximoRetorno(instruccion) {
    let instrucciones=0;
    for(let i=0; i<instruccion.length; i++ ){
        for(let j=0; j<instruccion.length; j++ )
        if(instruccion[i]===instruccion[j+1]){
             instrucciones++
        }
       
        
    } return instrucciones
    // Write your code here
    

}


console.log(calcularMaximoRetorno(array));