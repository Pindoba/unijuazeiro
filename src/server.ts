// console.log('tudo certo meu consagrado!!!')

// let salario = 1000
// let aumento = (salario/100)*25
// let novo_salario = salario + aumento
// console.log('O novo salario será R$'+novo_salario)
const prompt = require("prompt-sync")();

// let numero: number = prompt('Digite um numero: ');

// if (numero >= 1) {
//     console.log('o numero '+numero+' é positivo.')
// } 
// else if (numero ==0) {
//     console.log('Isso é um zero!')
// }

// else {
//     console.log('O numero '+numero+' é negativo.')
// }
let nota_1:number = 8//prompt('Digite a primeira nota: ')
let nota_2:number= 9//prompt('Digite a segunda nota: ')
let nota_3:number= 5//prompt('Digite a terceira nota: ')

let media:number = (nota_1 + nota_2 + nota_3)/3
console.log(media)