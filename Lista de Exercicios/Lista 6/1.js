let i, salario = 0, filhos = 0, maiorSal = 0, sal100 = 0, soma = 0, mediaSal = 0, mediaF = 0, perc = 0

for (i = 0; i <= 4; i++) {
    salario = parseInt(prompt("Digite o salário: "))
    filhos = parseInt(prompt("Digite o numero de filhos: "))
    soma += salario
    mediaF += filhos
}
if (salario <= 100) {
    sal100++
}
if (maiorSal < salario) {
    maiorSal = salario
}
mediaSal = soma / 5
mediaF = mediaF / 5
perc = sal100 * 100 / 5
alert("\nA média do salário da população é R$" + mediaSal)
alert("\nA média do número de filhos da população é " + mediaF)
alert("\nO Maior salário foi de R$" + maiorSal)
alert("\nO Percentual de pessoas com salário até " + "100 reais é:  " + sal100 + "%")
