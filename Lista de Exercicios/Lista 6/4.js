/*4-Obtenha um número digitado pelo usuário e repita a operação de multiplicar ele por
três (imprimindo o novo valor) até que ele seja maior do que 100. Ex.: se o usuário
digita 5, deveremos observar na tela a seguinte sequência: 5 15 45 135.*/

let numero=0
numero= prompt("Digite o número: ")

while(numero < 100){
	alert(" "+ numero)
	numero = numero * 3 
}