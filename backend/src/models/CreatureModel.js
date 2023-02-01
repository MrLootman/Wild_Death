const db = require("../datasource");

const table = "creature";

const findAll = () => {
  return db.query(`SELECT * FROM ${table}`);
};

const findOne = (id) => {
  return db.query(`SELECT * FROM ${table} WHERE id_creature = ?`, [id]);
};

const findAllWithIllustrations = () => {
  return db.query(
    `SELECT * FROM ${table} 
    INNER JOIN illustration 
    ON id_creature = illustration.fk_illustration_creature_id`
  );
};

const findAllWithGlobalInformations = (id) => {
  return db.query(
    `SELECT * FROM creature
    INNER JOIN illustration 
    ON id_creature = illustration.fk_illustration_creature_id
    INNER JOIN creature_in_book 
    ON id_creature = creature_in_book.fk_creature_id
    INNER JOIN book
    ON creature_in_book.fk_book_id = book.id_book
    INNER JOIN author
    ON book.fk_author_id = author.id_author
    WHERE id_creature = ?`,
    [id]
  );
};

const deleteOne = (id) => {
  return db.query(`DELETE FROM ${table} WHERE id_creature = ?`, [id]);
};

module.exports = {
  findAll,
  findOne,
  findAllWithIllustrations,
  findAllWithGlobalInformations,
  deleteOne,
};
