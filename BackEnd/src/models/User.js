const { types } = require("pg");
const db = require("../db/db");
const addUser = async (
  firstname,
  lastname,
  email,
  password,
  confirmpassword
) => {
  const query = `
    INSERT INTO "auth" (firstname, lastname, email, password , confirmpassword) 
    VALUES ($1, $2, $3, $4 , $5) RETURNING *;
  `;
  const values = [firstname, lastname, email, password, confirmpassword];

  const result = await db.query(query, values);
  return result.rows[0];
};
const getUsers = async () => {
  const result = await db.query('SELECT * FROM "auth"');
  return result.rows;
};

module.exports = { addUser, getUsers };
