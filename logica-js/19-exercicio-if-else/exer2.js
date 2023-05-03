/**
 * ## Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e 
exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais 
se este for o caso)
 */



const velocidade_veiculo1 = 40;
const veiculo_nome1= "gol";

const velocidade_veiculo2 = 50;
const veiculo_nome2= "Parati";


if(velocidade_veiculo1 > velocidade_veiculo2){
    console.log(veiculo_nome1, "é mais rápido");

} else if(velocidade_veiculo1 < velocidade_veiculo2){
    console.log(veiculo_nome2, "é mais rápido");
}else{
    onsole.log(veiculo_nome2 + "e " + veiculo_nome1 +" tem a mesma velocidade");
}




/**
 * ## Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, 
a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e 
então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado 
será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado ser
á igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem 
defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
 * 
 * 
 * 
 */
