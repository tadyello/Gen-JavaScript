/*Faça um sistema que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.
*/
let anos, meses, dias
anos = prompt("Anos: ");
meses = prompt("Meses: ");
dias = prompt("Dias: ");
anos = anos * 365;
meses = meses * 30;
dias= dias * 1
dias=anos+meses+dias;
alert("Você tem" + dias+" dias de idade.");
