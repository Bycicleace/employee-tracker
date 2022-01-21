const db = require('./db/connection.js');
const main = require('./utils/inquirer');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    main();
});