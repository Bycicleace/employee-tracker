const db = require('./db/connection.js');
const tracker = require('./utils/inquirer');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

    tracker.mainMenu();
});