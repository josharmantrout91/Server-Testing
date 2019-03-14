const db = require("../data/dbConfig.js");

module.exports = {
  add,
  remove,
  getAll,
  findById
};

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function remove(id) {
  return null;
}

function getAll() {
  return db("users");
}
