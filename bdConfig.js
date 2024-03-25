const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'bd-biblioteca-carloxd-pweb.mysql.database.azure.com',
    user: 'carlosxd',
    password: 'garenISgoat123',
    database: 'livraria',
    ssl: {
        mode: 'require'
    }
});

module.exports = {
    connection
}
