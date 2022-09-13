let numero, soma = 0, x
numero = prompt("Digite o número: ")

for (x = 1; x <= numero; x++){
    soma = soma + x
}
alert("\nA soma dos números de 1 até " + numero+ " = " + soma)