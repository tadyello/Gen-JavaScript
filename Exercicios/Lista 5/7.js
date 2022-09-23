/*7) Receber valores de base e altura de um triângulo e verificar se são valores válidos
(positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.
*/

let base, altura, area

base = prompt("Informe a medida da base do triângulo: ")
altura = prompt("Informe a medida da altura do triãngulo: ")
area = base * altura / 2.00

if (base > 0 && altura > 0) {
    alert("A área do triangulo é = ", area)
}else{
    alert("Não é possível fazer o cálculo com as medidas informadas!")
}