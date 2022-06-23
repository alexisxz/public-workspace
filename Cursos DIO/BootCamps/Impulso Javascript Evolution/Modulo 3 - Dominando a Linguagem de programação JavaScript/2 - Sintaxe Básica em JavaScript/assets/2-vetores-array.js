
let array = ['string', 1, true, ['array1'], ['array2']];
// console.log(array[3]);

//forEach
array.forEach(function (item, index) { console.log(item, index) });

// push
array.push("ola");
console.log(array);

// pop
array.pop()
console.log(array);

// Objetos e Manipulando objetos
let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ["array"],
    objectIntern: { objectIntern: 'object intern' }
};

console.log(object)
console.log(object.number)

var string = object.string;
console.log(string)

var { string, boolean, objectIntern } = object;
console.log(string, boolean, objectIntern)