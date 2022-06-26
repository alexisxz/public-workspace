const pessoa1 = {
    nome: "Lucas",
    idade: 55,
}

const pessoa2 = {
    nome: "Maria",
    idade: 30,
}

const pessoa3 = {
    nome: "Carla",
    idade: 26,
}

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "Pug",
}


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

console.log(calculaIdade.call(animal, 7)); //dado, parametro
console.log(calculaIdade.apply(animal, [10])); //dado, parametro

