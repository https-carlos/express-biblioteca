const { connection } = require('./bdConfig');

function filtrarBuscaQuery(query) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM livros WHERE titulo LIKE ?', [`%${query.titulo}%`], (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  }

function filtrarBuscaUrl(ano) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM livros WHERE ano = ?', [ano], (error, results) => {
          if (error) reject(error);
          resolve(results);
        });
      });
}

module.exports = {
    filtrarBuscaQuery,
    filtrarBuscaUrl
};
