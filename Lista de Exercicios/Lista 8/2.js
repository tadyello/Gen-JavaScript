/*2 - Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.*/
let taxaImposto, custo
custo = parseFloat(prompt("Informe o valor de custo:"))
taxaImposto = parseFloat(prompt("Informe a taxa de imposto:"))
function somaImposto(){
    custo+=(custo*taxaImposto)/100
    return alert("O valor de custo somado a taxa de imposto é igual a  R$"+custo)
}
somaImposto(taxaImposto,custo)
