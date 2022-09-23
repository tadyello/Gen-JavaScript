/*1 - Faça um Algoritmo que receba o preço de custo de um produto e mostre o valor da venda. sabe-se que o preço de custo receberá um acréscimo de acordo com um percentual informado pelo usuário .
*/
let custo, por, lucro, venda
custo = prompt("Informe o valor de custo do produto: ");
porc = prompt("Informe a porcentagem de lucro: ");
lucro = custo*(porc/100);
venda = parseFloat(lucro) + parseFloat(custo);
alert("O valor de venda do produto é R$"+ parseFloat(venda));