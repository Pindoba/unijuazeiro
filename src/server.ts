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
//execicio TypeScript
   

let nota_1:number = parseInt(prompt('Digite a primeira nota: '))
let nota_2:number = parseInt(prompt('Digite a segunda nota: ')) 
let nota_3:number = parseInt(prompt('Digite a terceira nota: '))    
let media = (nota_1 + nota_2 + nota_3)/3  
// console.log(media)

if (media <= 4.9){
    console.log("A media do aluno foi "+media+", então o aluno está REPROVADO!")
}

else if(media >= 5 && media < 6.9){
    console.log("A media do aluno foi "+media+", então o aluno está em RECUPERAÇÃO!")
}

else if (media>= 7){
    console.log("A media do aluno foi " +media+ ", então o aluno está APROVADO!")
}