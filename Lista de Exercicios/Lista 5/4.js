/*4) Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
número é par ou ímpar, e se é positivo ou negativo.
*/

let numero

numero = prompt("Informe o número: ")

if (numero %2 == 0){
    alert("O número "+numero+" é par.")
}else{
    alert("O número "+ numero+" é ímpar.")
}

if(numero>=0){
    alert("O número "+numero+" é positivo.")    
}else{
    alert("O número "+numero+" é negativo.")
}