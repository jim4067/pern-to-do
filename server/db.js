const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "postgres",
    password: "4067",
    host : "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;

//by default postgres runs on 5432