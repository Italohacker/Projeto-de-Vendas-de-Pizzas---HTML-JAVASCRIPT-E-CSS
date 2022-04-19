//Váriaveis
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0;
let vendaMista = 0;
let vendaCalabresa = 0;

//Funções
function vendas(){
const mussarela = document.getElementById('Mussarela')
const Mista = document.getElementById('Mista')
const calabresa = document.getElementById('Calabresa')

  if(mussarela.checked){
    somaMussarela = somaMussarela + 1;
    vendaMussarela = vendaMussarela + 25.00;
    document.getElementById('resultMussarela1').innerHTML = somaMussarela;
    document.getElementById('resultMussarela2').innerHTML = vendaMussarela.toFixed(2);
  }else if(Mista.checked){
    somaMista = somaMista + 1;
    vendaMista = vendaMista + 25.00;
    document.getElementById('resultMista1').innerHTML = somaMista;
    document.getElementById('resultMista2').innerHTML = vendaMista.toFixed(2);
  }else{
    somaCalabresa = somaCalabresa + 1;
    vendaCalabresa = vendaCalabresa + 25.00;
    document.getElementById('resultCalabresa1').innerHTML = somaCalabresa;
    document.getElementById('resultCalabresa2').innerHTML = vendaCalabresa.toFixed(2);
  }
}
function Estorno(){
const mussarela = document.getElementById('Mussarela')
const Mista = document.getElementById('Mista')
const calabresa = document.getElementById('Calabresa')

  if(mussarela.checked){
    somaMussarela = somaMussarela - 1;
    vendaMussarela = vendaMussarela - 25.00;
    if(somaMussarela < 0){
        somaMussarela = 0;
        vendaMussarela = 0.00;
    }
    document.getElementById('resultMussarela1').innerHTML = somaMussarela;
    document.getElementById('resultMussarela2').innerHTML = vendaMussarela.toFixed(2);
  }else if(Mista.checked){
    somaMista = somaMista - 1;
    vendaMista = vendaMista - 25.00;
     if(somaMista < 0){
      somaMista = 0;
      vendaMista = 0;
    }
    document.getElementById('resultMista1').innerHTML = somaMista ;
    document.getElementById('resultMista2').innerHTML = vendaMista.toFixed(2);
  }else{
    somaCalabresa = somaCalabresa - 1;
    vendaCalabresa = vendaCalabresa - 25.00;
    if(somaCalabresa < 0){
      somaCalabresa = 0;
      vendaCalabresa = 0;
    }
    document.getElementById('resultCalabresa1').innerHTML = somaCalabresa;
    document.getElementById('resultCalabresa2').innerHTML = vendaCalabresa.toFixed(2);
  }
}