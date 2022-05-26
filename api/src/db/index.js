const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "praktyka",
});

module.exports.connection = connection;

/**
 * @param {string} query
 * @param {(string | number | Date)[]} params
 * @returns {Promise<any>}
 */
module.exports.query = async (query, params) => {
  const [rows] = await (await connection).query(query, params);
  return !rows ? [] : rows;
};
