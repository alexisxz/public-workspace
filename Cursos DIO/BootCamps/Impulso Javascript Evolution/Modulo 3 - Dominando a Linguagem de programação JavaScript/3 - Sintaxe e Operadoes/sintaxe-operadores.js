/* Meu código do desafio
function sintaxe(n1, n2) {
    n1 === n2 ? console.log(`os números ${n1} e ${n2} são iguais.`) : console.log(`os números ${n1} e ${n2} não são iguais.`);

    sum = n1 + n2;
    sum > 10 && sum < 20 ? console.log(`Sua soma é ${sum}, que é maior que 10 e menor que 20.`) : sum < 10 ? console.log(`Sua soma é ${sum}, que é menor que 10 e menor que 20.`) : console.log(`Sua soma é ${sum}, que é maior que 10 e maior que 20.`);
}

sintaxe(1, 2);
*/

// o código da professora
function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return "Defina dois números!";

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`

}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';
    if (num1 !== num2) {
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criarSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros());