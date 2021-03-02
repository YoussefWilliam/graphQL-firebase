const userProfile = require("../firebase");
const fetch = require("node-fetch");

const databaseURL = process.env.FIREBASE_DATABASE_URL;
const resolvers = {
  Query: {
    users: async () => {
      const data = await fetch(
        "https://graphql-34f89-default-rtdb.firebaseio.com/users.json"
      );
      console.log("data:::", data);
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
      const mapsKeys = keys.map(function (item) {
        const userData = dataJson[item];
        const graphqlUser = userProfile(userData);
        return graphqlUser;
      });
      return mapsKeys;
    },
  },
};

module.exports = resolvers;
