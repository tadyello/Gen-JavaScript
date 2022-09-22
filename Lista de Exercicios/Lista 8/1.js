/*1 - Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
*/
let n1, n2, n3

n1 = parseFloat(prompt("Digite o primeiro número:"));
n2 = parseFloat(prompt("Digite o segundo número:"));
n3 = parseFloat(prompt("Digite o terceiro número:"));

function maiorNum() {
    if (n1 > n2 && n1 > n3) {
        maior = n1
    }
     else if (n2 > n1 && n2 > n3) {
        maior = n2
    }else if (n3 > n1 && n3 > n2) {
        maior = n3
    }
    return alert("O maior número infomado foi " + maior);
}
function menorNum() {
    if (n1 < n2 && n1 < n3) {
        menor = n1
    }
    else if (n2 < n1 && n1 < n3) {
        menor = n2
    }else if (n3 < n1 && n3 < n2) {
        menor = n3
    }
    return alert("O menor número infomado foi " + menor);
}
maiorNum(n1, n3, n3);
menorNum(n1, n3, n3);
