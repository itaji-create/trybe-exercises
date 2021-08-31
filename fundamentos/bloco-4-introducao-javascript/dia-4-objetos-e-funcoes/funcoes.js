function checkPalidromo(palavra) {
    let palidromo = '';
for (let p = palavra.length - 1; p >=0; p -= 1) {
   palidromo = palidromo + palavra[p];
}
if (palavra === palidromo) {
    console.log('É um Palídromo')
} else {
    console.log('Não é um Palídromo')
}
}
checkPalidromo('araro')

