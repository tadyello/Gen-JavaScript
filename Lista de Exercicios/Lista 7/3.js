/*3 -  Criar uma função que converta uma 
temperatura de Fahrenheit para Celsius
*/
let celcius, fahren

function convertFahren() {
    fahren = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    resultado = (fahren-32)/ 1.8
    return alert(fahren+" Fahrenheit convertido em Graus é igual a "+ resultado+"°C.");
    } 
    convertFahren(celcius,fahren);