// parâmetros

function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo)
}
mensagem('tudo certo', 'jovem!')

// declarativas
function funcao() {
    console.log('Tudo certo jovem!');
}
funcao()

//expressões de função
// com nomeação
var funcao2 = function funcao2() {
    console.log('Sou uma mensagem de função de expressão!')
}
funcao2()

// arrow (função anonima)
var funcao3 = () => {
    console.log('sou uma arrow function');
}
funcao3()