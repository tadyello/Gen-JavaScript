/*3 - Faça um algoritmo que efetua a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). o algoritmo deverá solicitar o valor da cotação do dólar.
*/
let cot, dol, convert
cot= prompt("Qual a cotação do  dolar em reais hoje? ")
dol =prompt("Informe a quantidade de dólares que quer converter em reais: ")
convert = dol*cot
alert("US$"+dol+" convertido em reais é = R$"+ convert)