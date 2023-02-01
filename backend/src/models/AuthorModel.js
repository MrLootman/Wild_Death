const db = require("../datasource");

const table = "author";

const findAll = () => {
  return db.query(`SELECT * FROM ${table}`);
};

const findOne = (id) => {
  return db.query(`SELECT * FROM ${table} WHERE id_author = ?`, [id]);
};

const deleteOne = (id) => {
  return db.query(`DELETE FROM ${table} WHERE id_author = ?`, [id]);
};

module.exports = {
  findAll,
  findOne,
  deleteOne,
};
