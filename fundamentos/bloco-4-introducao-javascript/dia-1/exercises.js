
// //exercise 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// const a = 5
// const b = 10

// console.log(a + b)
// console.log(a-b)
// console.log(a*b)
// console.log(a / b)
// console.log(a % b)



// //exercicio 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// const a = 50
// const b = 15

// if (b > a) {
//     console.log("b é maior")
// } else {
//     console.log('a é maior')
// }



// //exercicio 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
// const a = 15
// const b = 10
// const c = 20

// if (a > b && a > c) {
//     console.log("a é maior")
// } else if (b > a && b > c) {
//     console.log('b é maior')
// } else {
//     console.log('c é maior')
// }



// //exercicio 4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
// const a = -10

// if (a > 0) {
//     console.log("positive")
// } else if (a < 0) {
//     console.log('negative')
// } else {
//     console.log("zero")
// }



// //exercicio 5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// const a = 80
// const b = 30
// let c = 70

// if (a < 0 || b < 0 || c < 0) {
//     console.log("erro")
// } else if (a + b + c === 180) {
//     console.log(true)
// } else {
//     console.log(false)
// }


//exercicio 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "rei"

if (peca === "peao") {
    console.log("Somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas.")
} else if (peca === "bispo") {
    console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.')
} else if (peca === "torre") {
    console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.')
} else if (peca === "cavalo") {
    console.log('O cavalo é a peça mais especial no xadrez, possuindo uma flexibilidade que o torna poderoso. O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.')
} else if (peca === "rainha") {
    console.log('Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.')
} else if (peca === "rei") {
    console.log('O rei pode se mover para qualquer casa adjacente.')
} else {
    console.log('erro')
}


// //exercicio 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
// let nota = 40
// if (nota < 0 || nota > 100) {
//     console.log('erro')
// } else if (nota >= 90) {
//     console.log('A')
// } else if (nota >= 80) {
//     console.log('B')
// } else if (nota >= 70) {
//     console.log('C')
// } else if (nota >= 60) {
//     console.log('D')
// } else if (nota >= 50) {
//     console.log('E')
// } else {
//     console.log('F')
// } 



//exercicio 8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

// const a = 8
// const b = 15
// const c = 23

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//     console.log(true)   
// } else {
//  console.log(false)



// //exercicio 9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// const a = 15
// const b = 10
// const c = 12

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }



// //exercicio 10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// const custo = 10
// const venda = 15
// let montanteVendido = 1000
// const custoTotal = custo * 1.2
// const lucro = venda - custoTotal

// if (custo < 0 || venda < 0 || montanteVendido < 0) {
//     console.log("erro")
// } else {
//     console.log(lucro * montanteVendido)
// }
