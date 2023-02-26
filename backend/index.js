const express = require("express");
const cors = require("cors");

require("dotenv").config();

const userRoute = require("./src/features/users/user.route.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/users", userRoute);

app.get("/", (req, res) => res.send("hello"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log("server started on port 5000");
});
