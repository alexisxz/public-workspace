var j1 = 0;
var j2 = 1;
var placar;

//if
if (j1 > 0 && j2 == 0) {
    console.log('j1 marcou gol');
    placar = j1 > j2;
}
//else if
else if (j2 > 0 && j1 == 0) {
    console.log('j2 marcou gol');
    placar = j1 < j2;
}
// else
else {
    console.log('ngm marcou gol');
}


// if ternário
j1 !== -1 && j2 !== -1 ? console.log('Os jogadores são validos') : console.log('jogadores inválidos');

// switch case
switch (placar) {
    case placar = j1 > j2:
        console.log('j1 ganhou');
        break;
    case placar = j1 < j2:
        console.log('j2 ganho');
        break;
    default:
        console.log('ninguém ganhou');
}


let array = ['v1', 'v2', 'v3', 'v4', 'v5'];

let object = { propriedade1: 'v1', propriedade2: 'v2', propriedade3: 'v3' }

// for
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)
}

// for/in - imprimindo indice
// com array
for (let i in array) {
    console.log(i);
}
// com object
for (i in object) {
    console.log(i);
}

// for/of - não da para utilizar com objeto
// com array
for (i of array) {
    console.log(array)
}

// while - executa uma instrução "ENQUANTO" determina condição for verdadeira
var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

//do/while - executa uma instrução "ATÉ QUE" determina condição seja falsa
do {
    a++;
    console.log(a);
} while (a <= 10);