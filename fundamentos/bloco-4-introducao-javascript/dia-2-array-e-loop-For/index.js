let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// //1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// console.log(numbers)


// //2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let total = 0;
// for ( let i = 0; i < numbers.length; i += 1) {
//    total = total + numbers[i];
// }
//  console.log(total);


// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let total = 0
// let media = 0
// for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i]
//     media = total / numbers.length
// }
// console.log("media dos numeros da array = " + media)


// //4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// if (media > 20) {
//     console.log("maior que 20")
// } else {
//     console.log('menor ou igual a 20')
//}


//5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for (var i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.log('maior numero do array = ' + maior)


//6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let impar = [];
// for (let i = 0; i < numbers.length; i += 1){
// if (numbers[i] % 2 !== 0) {
//    impar.push(numbers[i])
//    console.log(impar.length)
// } else {
//     console.log('nao possui impar')
// }
// }


//7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let menor = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > 0 && numbers[i] < )
//     menor = numbers[i] 
//     console.log(menor)
// } 