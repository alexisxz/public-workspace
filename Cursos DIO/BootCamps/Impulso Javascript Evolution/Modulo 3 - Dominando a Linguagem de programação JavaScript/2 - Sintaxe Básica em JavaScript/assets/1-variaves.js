// tipos primitivos

// boolean
var VOuF = false;
console.log(VOuF);
console.log(typeof VOuF);

// number
var n = 1;
console.log(n)
console.log(typeof n);

// string
var nome = 'alexis';
console.log(nome)
console.log(typeof nome);

//função
var funcao = function () {
    console.log(typeof funcao);
};

// undefined
var variavel;
console.log(typeof variavel);

// escopos
var escopoGlobal = 'global';

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}

console.log(escopoGlobal)
escopoLocal()

// Operadores lógicos
// todos true
var e = true && true;
console.log(e)

// somente um true
var ou = true || false;
console.log(ou);

// inventer valores
var nao = !true;
console.log(nao);


