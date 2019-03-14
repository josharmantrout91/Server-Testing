const request = require("supertest");

const db = require("../data/dbConfig.js");
const Users = require("./users-model.js");

describe("users model", () => {
  describe("add()", () => {
    it("should insert the provided user to the db", async () => {
      const user = await Users.insert({ name: "Josh" });

      expect(user.name).toBe("Josh");
    });
  });
});
