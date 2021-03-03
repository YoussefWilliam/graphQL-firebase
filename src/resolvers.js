const fetch = require("node-fetch");

const resolvers = {
  Query: {
    users: async () => {
      const data = await fetch(
        "https://graphql-34f89-default-rtdb.firebaseio.com/users.json"
      );
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
      const dataKeys = keys.map(user => {
        let myUserData = dataJson[user];
        let myUserGraphQL = {
          fullName: myUserData.fullName,
          home: myUserData.home,
          age: myUserData.age,
          uni: myUserData.uni,
        }
        return myUserGraphQL;
      })
      return dataKeys
    },
  },
};

module.exports = resolvers;
