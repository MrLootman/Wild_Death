const db = require("../datasource");

const table = "user";

const findOne = (id) => {
  return db.query(`SELECT * FROM ${table} WHERE id_user = ?`, [id]);
};

const findAll = () => {
  return db.query(`SELECT * FROM ${table}`);
};

const deleteOne = (id) => {
  return db.query(`DELETE FROM ${table} WHERE id_user = ?`, [id]);
};

module.exports = {
  findOne,
  findAll,
  deleteOne,
};
