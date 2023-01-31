const express = require("express");

const router = express.Router();

// Import des différents controllers :

const userController = require("./controllers/UserController");

// Route concernant les utilisateurs :

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);

module.exports = router;
