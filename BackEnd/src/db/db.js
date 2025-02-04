const { Client } = require("pg");
// Create and configure the PostgreSQL client
const db = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1605",
  database: "postgres",
});

module.exports = db;
