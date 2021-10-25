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
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
  const result = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

//   console.log(result);

//   2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , 
//   com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. 
//   O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades 
//   quando o livro foi lançado.

const listAutors = books.map((book) => (
  { 
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear, 
  }
)).sort((book1, book2) => book1.age - book2.age);
console.log(listAutors);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}
  // console.log(fantasyOrScienceFiction());

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

const books60Anos = books.filter((book) => 2021 - book.releaseYear > 60)
.sort((book1, book2) => book1.releaseYear - book2.releaseYear);

// console.log(books60Anos);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const selectAuthors = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
.map((book) => book.author.name).sort();

// console.log(selectAuthors);

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const booksName60Anos = books.filter((book) => 2021 - book.releaseYear > 60).map((book) => book.name);
// console.log(booksName60Anos);

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).

const authorWith3DotsOnName = books.find((book) => (
  book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
)).name;
// função retirada do gabarito do course da trybe.
console.log(authorWith3DotsOnName)
