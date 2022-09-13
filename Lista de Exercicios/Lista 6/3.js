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

