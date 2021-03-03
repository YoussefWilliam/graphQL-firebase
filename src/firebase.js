const firebase = require("firebase");
require("dotenv").config();

const firebaseClient = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://graphql-34f89-default-rtdb.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
});

module.exports = firebaseClient;

