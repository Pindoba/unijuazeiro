// // execício_01
// // require prompt
const prompt = require("prompt-sync")();

// let nota_1:number = parseInt(prompt('Digite a nota do trabalho de laboratório: '))
// let nota_2:number = parseInt(prompt('Digite a nota da avaliação semestral: ')) 
// let nota_3:number = parseInt(prompt('Digite a nota do exame final: '))    
// let media = ((nota_1*2) + (nota_2*3) + (nota_3*5))/(2+3+5)  
// console.log(media)

// if (media <= 4.9){
//     console.log("A media do aluno foi "+media+", ficando assim com o conceito E")
// }

// else if(media >= 5 && media <= 5.9){
//     console.log("A media do aluno foi "+media+", ficando assim com o conceito D")
// }
// else if(media >= 6 && media <= 6.9){
//     console.log("A media do aluno foi "+media+", ficando assim com o conceito C")
// }
// else if(media >= 7 && media <= 7.9){
//     console.log("A media do aluno foi "+media+", ficando assim com o conceito B")
// }

// else if (media>= 8){
//     console.log("A media do aluno foi " +media+ ", ficando assim com o conceito A")
// }

// // execício_02

// var numeros = [];
// numeros.push(parseInt(prompt('Entre com o primeiro numero: ')))
// numeros.push(parseInt(prompt('Entre com o segundo numero: ')))
// numeros.push(parseInt(prompt('Entre com o terceiro numero: ')))
// console.log("Os numeros digitados foram em ordem crescente:\n"+numeros.sort())


// execício_03
// var numeros_c = []
// var n_1 = parseInt(prompt('Entre com o primeiro numero: '));
// var n_2 = parseInt(prompt('Entre com o segundo numero: '));
// while (n_1 > n_2 ) {
//     console.log("O numero deve ser maior que o anterior")
//     var n_2 = parseInt(prompt('Entre com o segundo numero: '));
    
// }
// var n_3 = parseInt(prompt('Entre com o terceiro numero: '));

// while (n_2 > n_3) {
//     console.log("O numero deve ser maior que o anterior")
//     var n_3 = parseInt(prompt('Entre com o terceiro numero: '));
// }
// var n_4 = parseInt(prompt('Entre com o quarto numero: '));        

// numeros_c.push(n_1,n_2,n_3,n_4)
// console.log("Os numeros digidados em ordem crescente são:\n"+numeros_c.sort())


// execício_04

var gerente_salario = 3000
var gerente_aumento = (gerente_salario/100)*10
var escrituario_salario = 1080
var escrituario_aumento = (escrituario_salario/100)*50
var secretario_salario = 1800
var secretario_aumento = (secretario_salario/100)*35
var caixa_salario = 2500
var caixa_aumento = (caixa_salario/100)*20
var diretor_salario = 5000
var diretor_aumento = (diretor_salario/100)*10


switch (parseInt(prompt("digite o codigo correspondente: "))) {
    case 1:
        console.log("Cargo: Escrituário","\nSalário atual: ",escrituario_salario,"\nValor do aumento: ", escrituario_aumento,"\nNovo salário: ",escrituario_salario+escrituario_aumento);
            break;
    case 2:
        console.log("Cargo: Secretário","\nSalário atual: ",secretario_salario,"\nValor do aumento: ", secretario_aumento,"\nNovo salário: ",secretario_salario+secretario_aumento);
            break;
    case 3:
        console.log("Cargo: Caixa","\nSalário atual: ",caixa_salario,"\nValor do aumento: ", caixa_aumento,"\nNovo salário: ",caixa_salario+caixa_aumento);
            break;
    case 4:
        console.log("Cargo: Gerente","\nSalário atual: ",gerente_salario,"\nValor do aumento: ", gerente_aumento,"\nNovo salário: ",gerente_salario+gerente_aumento);
            break;
    case 5:
        console.log("Cargo: Diretor","\nSalário atual: ",diretor_salario,"\nValor do aumento: Sem aumento\nNovo salário: ",diretor_salario);
            break;
    default:
        console.log('codigo invalido');
            break;
}