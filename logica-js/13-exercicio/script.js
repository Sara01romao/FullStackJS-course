
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