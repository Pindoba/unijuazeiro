// // console.log('tudo certo meu consagrado!!!')

// // let salario = 1000
// // let aumento = (salario/100)*25
// // let novo_salario = salario + aumento
// // console.log('O novo salario será R$'+novo_salario)
const prompt = require("prompt-sync")();

// // let numero: number = prompt('Digite um numero: ');

// // if (numero >= 1) {
// //     console.log('o numero '+numero+' é positivo.')
// // } 
// // else if (numero ==0) {
// //     console.log('Isso é um zero!')
// // }

// // else {
// //     console.log('O numero '+numero+' é negativo.')
// // }
// //execicio TypeScript
   

// let nota_1:number = parseInt(prompt('Digite a primeira nota: '))
// let nota_2:number = parseInt(prompt('Digite a segunda nota: ')) 
// let nota_3:number = parseInt(prompt('Digite a terceira nota: '))    
// let media = (nota_1 + nota_2 + nota_3)/3  
// // console.log(media)

// if (media <= 4.9){
//     console.log("A media do aluno foi "+media+", então o aluno está REPROVADO!")
// }

// else if(media >= 5 && media <= 6.9){
//     console.log("A media do aluno foi "+media+", então o aluno está em RECUPERAÇÃO!")
// }

// else if (media>= 7){
//     console.log("A media do aluno foi " +media+ ", então o aluno está APROVADO!")
// }









// let somatotal = 0
// for (let i = 1; i < 4; i++){
//     let x = prompt("Digite o "+i+"º numero: ");
//     somatotal=somatotal+Number(x);
// }
// if (somatotal >= 1){
//     console.log("O numero "+somatotal+" é positivo!(não o notebook kkk)")
// }
// else if (somatotal < 0){
//     console.log("O numero "+somatotal+" é negativo!")
// }
// else (somatotal == 0) ;{
//     console.log("Isso é um zero!!!")
// }

// let i
// do{
//     let i = prompt("Digite um numero: ")
// }

// while(i != 7);


// switch (parseInt(prompt("digite: "))) {
//     case 1:
//         console.log("Aluno")
//         break;
//     case 2:
//         console.log("Professor")
//         break;
//     case 3:
//         console.log("Codernador")
//         break;
//     default:
//         console.log("funcionario")
//         break;
// }


let fruits1: string[] = ['Apple', 'orange','Banana'];
// console.log(fruits1[1])
for(let i = 0; i < fruits1.length; i++)

{
    fruits1[i] = prompt('digite');
}

for (let i = 0; i < fruits1.length; i++){
    console.log('A '+(i+1)+'º fruta é '+fruits1[i])
}
