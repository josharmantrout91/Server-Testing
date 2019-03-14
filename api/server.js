const express = require("express");

const Users = require("../users/users-model");

const server = express();

server.use(express.json());

server.post("/users", (req, res) => {
  const newUser = req.body;
  Users.add(newUser)
    .then(ids => {
      const [id] = ids;

      Users.where({ id })
        .first()
        .then(createdUser => {
          res.status(201).json(createdUser);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
