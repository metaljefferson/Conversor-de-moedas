function Converter() {
    var valorElemento = document.getElementById("valor"); // ele puxa um elemento do html pelo ID
    var valor = valorElemento.value; // so quero o valor numerico 
    var valorEmDolarNumerico = parseFloat(valor); // passar o valor em numero quebrado 

    var valorEmReal = valorEmDolarNumerico * 5;


    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado  em real é R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;

}

function Converter1() {
    var valorElemento = document.getElementById("valor1"); // ele puxa um elemento do html pelo ID
    var valor = valorElemento.value; // so quero o valor numerico 
    var valorEmReal = parseFloat(valor); // passar o valor em numero quebrado 

    var valorEmDolar = valorEmReal / 5;


    var elementoValorConvertido1 = document.getElementById("valorConvertido1");
    var valorConvertido1 = "O resultado  em dolarUS$ " + valorEmDolar;
    elementoValorConvertido1.innerHTML = valorConvertido1;

}