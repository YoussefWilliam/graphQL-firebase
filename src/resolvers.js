const fetch = require("node-fetch");

const url = "https://graphql-34f89-default-rtdb.firebaseio.com/";

const resolvers = {
  Query: {
    users: async () => {
      const data = await fetch(
        `${url}/users.json`
      );
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
      const arrayOfUserData = keys.map(user => {
        let myUserData = dataJson[user];
        let myUserGraphQL = {
          fullName: myUserData.fullName,
          home: myUserData.home,
          age: myUserData.age,
          uni: myUserData.uni,
        }
        
        return myUserGraphQL;
      })
      console.log("data:::", arrayOfUserData)
      return arrayOfUserData
    },
  },
};

module.exports = resolvers;
