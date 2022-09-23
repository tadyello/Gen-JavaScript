/*2 - Criar uma função que converta uma temperatura 
de Celsius para Fahrenheit
*/

let celcius, fahren

function convertCelcius() {
    celcius = parseFloat(prompt("Digite a temperatura em celcius:"))
    resultado = celcius * 1.8 + 32
    return alert(celcius+" Graus convertido em Fahrenheit é igual a "+ resultado+"°F.")
    } 
    convertCelcius(celcius,fahren)