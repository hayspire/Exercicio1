function calcular(operacao){
   var resposta = document.getElementById("resposta");

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
  

if(operacao == "soma"){

    var resposta = num1 + num2;
   
}
    if(operacao == "subtracao"){
        var resposta = num1 - num2;
        
    }
    if(operacao == "multiplicacao"){
        var resposta = num1 * num2;
            
        }
       

    if(operacao == "divisao"){
        var resposta = num1/num2;
        
    }
    debugger
console.log(resposta);
}
