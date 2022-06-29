// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// 1
let employee = {
    code: 10,
    name: 'John',
};
employee.code = 10;
employee.name = "John";

// 2
let employee2: { code: number, name: string } = {
    code: 10,
    name: 'John',
}

// 3
interface IEmployee {
    code: number,
    name: string,
}

let employee3: IEmployee = {
    code: 10,
    name: 'John',
}

let employee4 = {} as IEmployee;
employee4.code = 10;
employee4.name = 'John';