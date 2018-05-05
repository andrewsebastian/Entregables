function mayor(){
    
    var num1 = document.getElementById('caja1').value;
    var num2 = document.getElementById('caja2').value;
    var resultado=0;     
    
    if (num1>num2){
        
        resultado = num1;
        resultado = document.getElementById('caja3').value=resultado;
    }
        else{
        
        resultado = num2;
        resultado = document.getElementById('caja3').value=resultado;
    }
    return false;
}
