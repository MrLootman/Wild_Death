const express = require("express");

const router = express.Router();

// Import des différents controllers :

const authorController = require("./controllers/AuthorController");
const creatureController = require("./controllers/CreatureController");
const illustrationController = require("./controllers/IllustrationController");

// Route concernant les auteurs :

router.get("/author", authorController.getAllUsers);
router.get("/author/:id", authorController.getUserById);

// Routes pour récupérer les données du bestiaire :

router.get("/creatures", creatureController.getAllCreaturesWithIllustrations);
router.get(
  "/creatures/:id",
  creatureController.getCreatureByIdWithInformations
);

// Routes pour publier une nouvelle créature :

router.post("/creatures", creatureController.postNewCreatureName);
router.post(
  "/illustration",
  illustrationController.postNewIllustrationUrlWithIllustratorName
);

module.exports = router;
