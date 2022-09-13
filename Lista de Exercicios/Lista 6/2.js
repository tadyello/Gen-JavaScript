let soma = 0, x

for (x = 1; x <= 500; x++)
{
    if (x%2 != 0 && x%3 == 0)

soma += x
}
alert("A soma de todos os números ímpares e múltiplos de 3 no conjunto de 1 a 500 é = " + soma)
