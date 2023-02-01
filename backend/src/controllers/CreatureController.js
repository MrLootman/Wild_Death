const CreatureModel = require("../models/CreatureModel");

const getAllCreatures = (req, res) => {
  CreatureModel.findAll()
    .then(([creatures]) => {
      res.status(200).send(creatures);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllCreaturesWithIllustrations = (req, res) => {
  CreatureModel.findAllWithIllustrations()
    .then(([creatures]) => {
      res.status(200).send(creatures);
      console.warn(creatures);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getCreatureById = (req, res) => {
  const { id } = req.params;
  CreatureModel.findOne(id)
    .then(([users]) => {
      if (users[0] !== null) {
        res.status(200).send(users[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getCreatureByIdWithInformations = (req, res) => {
  const { id } = req.params;
  CreatureModel.findAllWithGlobalInformations(id)
    .then(([creature]) => {
      if (creature[0] !== null) {
        res.status(200).send(creature[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllCreatures,
  getAllCreaturesWithIllustrations,
  getCreatureByIdWithInformations,
  getCreatureById,
};
