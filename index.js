const apiRoutes = require('./routes/apiRoutes');
const db = require('./db/connection.js');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    // Start Process here
});