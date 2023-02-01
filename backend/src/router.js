const express = require("express");

const router = express.Router();

// Import des différents controllers :

const authorController = require("./controllers/AuthorController");
const creatureController = require("./controllers/CreatureController");

// Route concernant les auteurs :

router.get("/author", authorController.getAllUsers);
router.get("/author/:id", authorController.getUserById);

// Routes concernant le créatures du bestiaire :

router.get("/creatures", creatureController.getAllCreaturesWithIllustrations);
router.get(
  "/creatures/:id",
  creatureController.getCreatureByIdWithInformations
);

module.exports = router;
