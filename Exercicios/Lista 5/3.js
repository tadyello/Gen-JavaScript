/*3) Desenvolva um sistema em que:
Leia 4 (quatro) números;
Calcule o quadrado de cada um;
Se o valor resultante do quadrado do terceiro for &gt;= 1000, imprima-o e finalize;
Caso contrário, imprima os valores lidos e seus respectivos quadrados.
*/

let n1, n2, n3, n4, q1, q2, q3, q4

n1 = prompt("Digite o primeiro número: ")
n2 = prompt("Digite o primeiro número: ")
n3 = prompt("Digite o primeiro número: ")
n4 = prompt("Digite o primeiro número: ")
q1 = n1 * n1
q2 = n2 * n2
q3 = n3 * n3
q4 = n4 * n4 

if(q3 >= 1000){
    alert("O quadrado de "+n3+" é igual a "+ q3)
}else{
    alert("\nO quadrado de "+n1+" é igual a "+ q1+"\nO quadrado de "+n2+" é igual a "+ q2+"\nO quadrado de "+n3+" é igual a "+ q3+"\nO quadrado de "+n4+" é igual a "+ q4)

}