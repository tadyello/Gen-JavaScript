let i, salario, filhos, mediaF, maiorSal, sal100 = 0.00, soma = 0.00, mediaSal = 0.00

for (i = 0; i <= 4; i++)
 {
    salario = prompt("Digite o salário: ")
    filhos = prompt("Digite o numero de filhos: ")
    soma += salario
    mediaF += filhos
}
    if (mSal < salario) 
        mSal = salario
    
    if (salario <= 100)
    {
        sal100++
    }
mediaSal = soma / 5
mediaF = mediaF / 5
perc = (sal100 / 5) * 100.00
{
alert("\nA média do salário da população é "+ mediaSal)
alert("\nA média de filhos da população é "+ mediaF)
alert("\nO Maior salário foi "+ mSal)
alert("\nO Percentual de pessoas com salário até"+ "100 reais é:  "+ perc+ "%" )
}