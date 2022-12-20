const db = require("../datasource");

const table = "boat";

const find = (id) => {
  return db.query(`select * from  ${table} where id = ?`, [id]);
};

const findAll = () => {
  return db.query(`select * from  ${table}`);
};

const deleteOne = (id) => {
  return db.query(`delete from ${table} where id = ?`, [id]);
};

module.exports = {
  find,
  findAll,
  deleteOne,
};
