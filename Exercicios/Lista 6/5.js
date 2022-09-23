/*5- Faça um programa que mostre uma contagem na tela de 233 a 456, só que
contando de 3 em 3 quando estiver entre 300 e 400 e de 5 em 5 quando não estiver.*/

let x = 233
do {
    x = x + 5
    console.log(x)
} while (x < 300)
do {
    x = x + 3
    console.log(x)
} while (x < 400)
do {
    x = x + 5
    console.log(x)
} while (x <= 456)
