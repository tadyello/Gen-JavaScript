/*3- Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo.*/

let numero=0, soma = 0, qtd = 0

do{
    numero = prompt("Entre com um valor: ")
		
    if (numero < 0)
    break
    qtd++
    soma += parseInt(numero)
}while(numero > 0)
media = soma/qtd

alert("\nO valor da soma dos números informados é "+ soma)
alert("\nO valor da media números informados é "+ media)
alert("\nA quantidade de números informados é "+ qtd)

