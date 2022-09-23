/* 1 João, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho.
 Toda vez que ele traz um peso de tomate maior que o estabelecido pelo regulamento do estado de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo excedente.
 João precisa que você faça um sistema que leia a variável P (peso de tomates) e verifique se há excesso.
 Se houver, gravar na variável E (Excesso) e na variável M o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.
 */
let peso, excesso, multa

peso = prompt("Qual o peso dos tomates?");
excesso = peso - 50.00;
multa = excesso * 4.00;

if (peso > 50) {
    alert("Excesso de " + excesso + "KG" + "\nO valor da multa é de R$" + multa)
} else{
    multa = 0
    excesso = 0
	alert("Não houve excesso de peso, portanto sem multa!")

}