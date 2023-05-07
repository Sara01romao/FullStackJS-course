/**
 * ## Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e 
exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais 
se este for o caso)
 */



const velocidade_veiculo1 = 40;
const veiculo_nome1= "gol";

const velocidade_veiculo2 = 30;
const veiculo_nome2= "Parati";


if(velocidade_veiculo1 > velocidade_veiculo2){
    console.log(veiculo_nome1, "é mais rápido");

} else if(velocidade_veiculo1 < velocidade_veiculo2){
    console.log(veiculo_nome2, "é mais rápido");
}else{
    onsole.log(veiculo_nome2 + "e " + veiculo_nome1 +" tem a mesma velocidade");
}





