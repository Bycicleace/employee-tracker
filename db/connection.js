const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@.}Ntvh{07bL,+jSW8Bx',
    database: 'tracker'
});

module.exports = db;