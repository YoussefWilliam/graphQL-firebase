const fetch = require("node-fetch");
const firebaseClient = require("./firebase");

const url = "https://graphql-34f89-default-rtdb.firebaseio.com/";

const usersDatabase = firebaseClient.database();

const resolvers = {
  Query: {
    users: async () => {
      const data = await fetch(`${url}/users.json`);
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
      const arrayOfUserData = keys.map((user) => {
        let myUserData = dataJson[user];
        let myUserGraphQL = {
          fullName: myUserData.fullName,
          home: myUserData.home,
          age: myUserData.age,
          uni: myUserData.uni,
        };

        return myUserGraphQL;
      });
      return arrayOfUserData;
    },
  },
  Mutation: {
    addUser: async (root, { fullName, age, home, uni }, { api }, info) => {
      const newUser = {
        fullName: fullName,
        home: home,
        age: age,
        uni: uni,
      };
      await usersDatabase.ref("users/").push(newUser);
      return true;
    },
  },
};

module.exports = resolvers;
