const express = require("express");
const firebase = require("firebase");
const cors = require("cors");

require("dotenv").config();

const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const app = express();

const firebaseClient = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
});

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      headers: req.headers,
      firebaseClient,
    };
  },
});



server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log("Server has started 🚀 http://localhost:4000/graphql");
});
