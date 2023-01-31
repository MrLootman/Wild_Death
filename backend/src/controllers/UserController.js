const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const welcome = (req, res) => {
  res.send("Welcome ! This is our website 😊 !");
};

const getAllUsers = (req, res) => {
  UserModel.findAll()
    .then(([users]) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  UserModel.findOne(id)
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

const signInUser = (req, res) => {
  UserModel.postUser(req)
    .then((result) => {
      const payload = { sub: result.insertId };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      const idUser = result[0].insertId;
      res
        .location(`/users/${result.insertId}`)
        .send({ idUser, token, user: req.body })
        .status(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};

module.exports = {
  welcome,
  getAllUsers,
  getUserById,
  signInUser,
};
