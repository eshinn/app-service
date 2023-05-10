const express = require("express");
const axios = require("axios");

const app = express();
const { PORT, USERS_SERVICE_URL, NOTES_SERVICE_URL } = process.env;

app.get("/", async (_req, res) => {
  console.log("got request");
  const { data: user } = await axios.get(USERS_SERVICE_URL);
  const { data: notes } = await axios.get(NOTES_SERVICE_URL);
  console.log({ user, notes });
  res.send({ message: "Hello World!", user, notes });
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
