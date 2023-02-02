const db = require("../datasource");

const table = "illustration";

const addIllustratorAndIllustration = (
  illustratorName,
  creatureIllustration,
  idCreature
) => {
  return db.query(
    `INSERT INTO ${table} (illustrator, image, fk_illustration_creature_id) VALUES (?, ?, ?);`,
    [illustratorName, creatureIllustration, idCreature]
  );
};

module.exports = {
  addIllustratorAndIllustration,
};
