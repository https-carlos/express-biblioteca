const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

const livros = [
  { id: 1, titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
  { id: 2, titulo: "O Mercador de Veneza", autor: "William Shakespeare", ano: 1605 },
  { id: 3, titulo: "O Engenhoso Fidalgo Dom Quixote de la Mancha", autor: "Miguel de Cervantes", ano: 1605 },
  { id: 4, titulo: "Hamlet", autor: "William Shakespeare", ano: 1605 },
  { id: 5, titulo: "Fausto", autor: "Johann Wolfgang von Goethe", ano: 1808 },
  { id: 6, titulo: "Orgulho e Preconceito", autor: "Jane Austen", ano: 1813 },
  { id: 7, titulo: "Frankenstein", autor: "Mary Shelley", ano: 1818 },
  { id: 8, titulo: "Os Miseráveis", autor: "Victor Hugo", ano: 1862 },
  { id: 9, titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", ano: 1865 },
  { id: 10, titulo: "Viagem ao Centro da Terra", autor: "Júlio Verne", ano: 1864 },
  { id: 11, titulo: "O Primo Basílio", autor: "Eça de Queirós", ano: 1878 },
  { id: 12, titulo: "Anna Karenina", autor: "Lev Tolstói", ano: 1877 },
  { id: 13, titulo: "A Ilha do Tesouro", autor: "Robert Louis Stevenson", ano: 1883 },
  { id: 14, titulo: "Drácula", autor: "Bram Stoker", ano: 1897 },
  { id: 15, titulo: "O Corcunda de Notre-Dame", autor: "Victor Hugo", ano: 1831 },
  { id: 16, titulo: "A Metamorfose", autor: "Franz Kafka", ano: 1915 },
  { id: 17, titulo: "Ulisses", autor: "James Joyce", ano: 1922 },
  { id: 18, titulo: "O Grande Gatsby", autor: "F. Scott Fitzgerald", ano: 1925 },
  { id: 19, titulo: "Em Busca do Tempo Perdido", autor: "Marcel Proust", ano: 1913 },
  { id: 20, titulo: "O Processo", autor: "Franz Kafka", ano: 1925 },
  { id: 21, titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 },
  { id: 22, titulo: "O Apanhador no Campo de Centeio", autor: "J.D. Salinger", ano: 1951 },
  { id: 23, titulo: "O Senhor dos Anéis: A Sociedade do Anel", autor: "J.R.R. Tolkien", ano: 1954 },
  { id: 24, titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937 },
  { id: 25, titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945 },
  { id: 26, titulo: "1984", autor: "George Orwell", ano: 1949 },
  { id: 27, titulo: "A Culpa é das Estrelas", autor: "John Green", ano: 2012 },
  { id: 28, titulo: "O Código Da Vinci", autor: "Dan Brown", ano: 2003 },
  { id: 29, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997 },
  { id: 30, titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", ano: 2005 },
  { id: 31, titulo: "Eu vou bater o record mundial", autor: "Carlinhos", ano: 2500 }
];

let pesquisa = false

app.get('/', (req, res) => {
  res.render('index', {resultados: [], erro: "", pesquisa})
});

app.get('/buscar', (req, res) => {
  let query = req.query;

  if (!query.titulo) {
    return res.render("index", {erro: "Nenhum livro encontrado para sua pesquisa.", resultados: [], pesquisa});
  }

  const resultados = livros.filter((livro) => livro.titulo.toLowerCase().includes(query.titulo.toLowerCase()));

  if (query.titulo.trim() === "" || resultados.length === 0) {
    return res.render("index", {erro: "Nenhum livro encontrado para sua pesquisa.", resultados: [], pesquisa});
  }

  res.render("index" , {resultados,  erro: "", pesquisa: true});
});

app.get('/buscar/:ano', (req, res) => {
     let ano = req.params.ano
     const resultados = livros.filter((livro) => livro.ano == ano);

  if (ano.trim() === "" || resultados.length === 0) {
    return res.render("index", {erro: "Nenhum livro encontrado para sua pesquisa.", resultados: [], pesquisa});
  }

  res.render("index" , {resultados,  erro: "", pesquisa: true});
});

app.listen(3000, () => console.log('Server ready'));
