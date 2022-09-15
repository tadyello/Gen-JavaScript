/*6- Faça um programa que pegue um número do teclado e calcule a soma de todos os
números de 1 até ele. Ex.: o usuário entra 7, o programa vai mostrar 28, pois
1+2+3+4+5+6+7=28.*/

let numero, soma = 0, x
numero = prompt("Digite o número: ")

for (x = 1; x <= numero; x++){
    soma = soma + x
}
alert("\nA soma dos números de 1 até " + numero+ " = " + soma)
