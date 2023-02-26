const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("cointab");

async function connect() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log("Connected to MongoDB!");
  } catch (e) {
    console.error(e);
  }
}

connect();

const { Router, request } = require("express");
const { default: axios } = require("axios");

const router = Router();

const getUsers = async () => {
  try {
    const res = await axios.get("https://randomuser.me/api/?results=100");
    const data = res.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// GET all users API

router.get("/", async (req, res) => {
  const data = await getUsers()
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err.message));

  try {
    const prevUsers = await db.collection("users").find().toArray();
    if (prevUsers) {
      await db.collection("users")?.drop();
    }
    await db.collection("users").insertMany(data);
    const users = await db.collection("users").find().toArray();
    res.send(users);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error" });
  }
});

// DELETE all users API

router.delete("/", async (req, res) => {
  try {
    await db.collection("users")?.drop();
    res.send("Users deleted successfully");
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// GET single user by id API

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db
      .collection("users")
      .find({ _id: new ObjectId(id) })
      .toArray();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
