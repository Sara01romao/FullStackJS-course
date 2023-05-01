//1- Escreva um programa em javascript que permita salvar informações de um recruta.
//As informações a serem salvas são:

/*
- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o pragama deve exibir o nome completo do recruta, seu campo de estudo e sua idade
(apenas baseada no ano de nascimento)


*/



function cadastrar(){
    var nome = document.querySelector('#nome').value;
    var sobrenome = document.querySelector('#sobrenome').value;
    var estudo = document.querySelector('#estudo').value;
    var anoNascimento = document.querySelector('#anoNascimento').value;
    var resultado = document.querySelector('.resultado');
     

    var idade = calculaIdade(anoNascimento);
     
    resultado.innerHTML= `<li>Nomes: ${nome} ${sobrenome}</li>
    <li>Idade: ${idade}</li><li>Area de Estudo: ${estudo}</li>`;

    console.log("idade:", idade )
}





function calculaIdade(anoNascimento){
    var data = new Date;
    var ano = data.getFullYear();
    
    return ano - anoNascimento;


}



/*2- Escreva um programa em javascript que permita inserir dois valores numéricos e então calcule
o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão) 

Após calcular os resultados o programa deve exibi-los na tela.

*/



function calcular(){
    const num1 = document.getElementById("valor1").value;
    const num2 = document.getElementById("valor2").value;
   
    
    document.querySelector('.resultado-conta').innerHTML=`
      Soma  ${parseInt(num1) + parseInt(num2)}; Subtração ${num1 - num2};  Multiplicação ${num1 * num2};
      Divisão   ${num1 / num2}
    `
}
