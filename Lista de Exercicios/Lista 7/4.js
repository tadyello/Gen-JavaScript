/*4 - Crie uma um programa de saúde, nesse programa desenvolva uma função que calcula o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.
*/
let peso, altura

function calcIMC() {
    peso = parseFloat(prompt("Digite o peso da pessoa:"))
    altura = parseFloat(prompt("Digite a altura:"))
    imc = peso /(altura*altura)
    return alert("O IMC de uma pessoa com "+ imc)
    } 
    calcIMC(peso,altura)