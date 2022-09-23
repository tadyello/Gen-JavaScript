/*2 Elabore um sistema que leia as variáveis C e N, respectivamente código e número de
horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00
por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento
armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
excedente.*/

let horas, limite, sal_Extra, total, cod

cod = prompt("Informe o código do funcionário: ")
horas = prompt("Informe a quantidade de horas trabalhadas: ")
limite = 50.00
salario = limite * 10.00
sal_Extra = (horas - 50.00) * 20.00
total = salario + sal_Extra
if (horas > 50.00) {
    alert("O salário total do funcionário código " + cod + " é de R$" + total + "\nO valor do salário excedente é de R$" + sal_Extra)
} else {
    sal_Extra = 0.00
    alert("O funcionário " + cod + " não fez horas extras.")

}

