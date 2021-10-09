const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];
  
  // Adicione o código do exercício aqui:
  //   1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

  const authorBornIn1947 = books.find((name) => name.author.birthYear === 1947).author.name;
   
  console.log(authorBornIn1947);


//   2 - Retorne o nome do livro de menor nome.
function smallerName() {
    // escreva aqui o seu código
    let nameBook = books[0].name;
    books.forEach((book) => {
    book.name.length < nameBook.length ? nameBook = book.name : nameBook;
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
};
  console.log(smallerName());

//   3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const name26caracters = books.find((nome) => nome.name.length === 26).name;

console.log(name26caracters);

//   4 - Ordene os livros por data de lançamento em ordem decrescente.
const orderedBooks = books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
// console.log(orderedBooks);


//   5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const bornSecXX = books.every((secXX) => secXX.author.birthYear > 1900 && secXX.author.birthYear < 2001);

console.log(bornSecXX)

//   6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const the80S =  books.some((book) => book.releaseYear > 1979 && book.releaseYear < 1990 ? true : false);

console.log(the80S);

//   7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const authorUnique = () => {
    return books.every((book) =>
      !books.some((bookSome) =>
        (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
  }

console.log(authorUnique());
