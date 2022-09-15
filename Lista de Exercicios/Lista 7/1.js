/*1 - Criar uma função para calcular a 
porcentagem de um número
*/

let persentual, numero

function calcPorc() {
    numero = parseFloat(prompt("Digite o número:"))
    persentual = parseFloat(prompt("Digite o persentual:"))
    resultado = numero * persentual / 100
    return alert(persentual+"% do número "+numero+" é igual a "+ resultado)
    } 
    calcPorc(numero,persentual)
