const express = require("express");
const axios = require("axios");
const connect = require("./src/configs/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const resp = await axios.get("https://randomuser.me/api/?results=100");
    res.send(resp.data.results);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, async () => {
  await connect();
  console.log("server started on port 8080");
});
