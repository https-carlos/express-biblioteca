const { filtrarBuscaQuery, filtrarBuscaUrl } = require('./models');

async function query(req, res) {
    let query = req.query;
    let pesquisa = false

    let resultados = await filtrarBuscaQuery(query)

    console.log(resultados)

    if (!query.titulo || query.titulo.trim() === "" || resultados.length === 0) {
        return res.render("index", { erro: "Nenhum livro encontrado para sua pesquisa.", resultados: [], pesquisa });
    }

    res.render("index", { resultados, erro: "", pesquisa: true });
}

async function url(req, res) {
    let ano = req.params.ano
    let pesquisa = false

    let resultados = await filtrarBuscaUrl(ano)

    if (ano.trim() === "" || resultados.length === 0) {
        return res.render("index", { erro: "Nenhum livro encontrado para sua pesquisa.", resultados: [], pesquisa });
    }

    res.render("index", { resultados, erro: "", pesquisa: true });
}

module.exports = {
    query,
    url
}
