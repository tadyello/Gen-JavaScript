/*
6) Elabore um sistema que dada a idade de um nadador classifique-o em uma das ifguintes
categorias:
Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos
*/
 
let idade

idade = prompt("Informe a idade do nadador: ")

if(idade >= 5 && idade <= 7)
{
    alert("A categoria do nadador é Infantial A.")
}
if(idade >= 8 && idade <= 11)
{
    alert("A categoria do nadador é Infantial B.")
}
if(idade >= 12 && idade <= 13)
{
    alert("A categoria do nadador é Juvenil A.")
}
if(idade >= 14 && idade <= 17)
{
    alert("A categoria do nadador é Juvenil B.")
}
if(idade >= 18)
{
    alert("A categoria do nadador é Adulto.")
}