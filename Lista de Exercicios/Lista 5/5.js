/*5) A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
medido e emita a notificação adequada aos diferentes grupos de empresas.
*/

let indice

indice = prompt("Informe o valor do índice de poluição:")

if(indice >= 0.05 && indice <= 0.25)
{
    alert("O índice de poluição está dentro do aceitável!")
}
if(indice >= 0.30 && indice <= 0.39)
{
    alert("As indústrias do 1° grupo devem suspender suas atividades!")
}
if(indice >= 0.40 && indice <= 0.49)
{
    alert("As indústrias do 1° e 2° grupo devem suspender suas atividades!.")
}
if(indice >= 0.5)
{
    alert("As indústrias dos 3 grupos devem suspender suas atividades!")
}