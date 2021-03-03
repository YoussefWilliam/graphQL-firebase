const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    fullName: String
    age: Int
    home: String
    uni: String
  }
  type Query {
    users: [User]
  }
`;
module.exports = typeDefs;
