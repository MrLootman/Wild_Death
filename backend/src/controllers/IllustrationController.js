const illustrationModel = require("../models/IllustrationModel");

const postNewIllustrationUrlWithIllustratorName = (req, res) => {
  const { illustratorName, creatureIllustration, idCreature } = req.body;
  illustrationModel
    .addIllustratorAndIllustration(
      illustratorName,
      creatureIllustration,
      idCreature
    )
    .then(() => {
      res
        .status(201)
        .send({ message: "Illustration with his / her illustrator Added" });
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  postNewIllustrationUrlWithIllustratorName,
};
