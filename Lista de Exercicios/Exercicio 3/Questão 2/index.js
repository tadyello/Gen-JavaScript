/*2 - faça um algoritmo que receba um valor que foi depositado e exiba o valor com rendimento após um mês. considere fixo o juro da poupança em 0,70% a.m
*/
let valor, juros = 0.70, total
valor = prompt("Informe o valor depositado: ");
total = valor+(valor*juros)/100;
alert("O valor depositado acrescido de "+juros+" de juros após um mês é igual a R$"+total);


