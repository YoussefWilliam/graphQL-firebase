const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    fullName: String
    email: String!
    location: String
    age: String
    citizen: Boolean
  }
  type Query {
    users: [User]
  }
`;
module.exports = typeDefs;
