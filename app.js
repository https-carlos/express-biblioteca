const express = require('express');
const app = express();
const { url, query } = require('./controller');

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { resultados: [], erro: "", pesquisa: false })
});

app.get('/buscar', query);

app.get('/buscar/:ano', url);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`O servidor está rodando na porta ${PORT}`);
});
