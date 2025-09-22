import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb+srv://akshay:4ARMS1k@cluster0.eunicwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "VirtualCareerFair";
const client = new MongoClient(url);

const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Test Route
app.get("/", (req, res) => res.status(200).json("Hello World from Express JS"));

// --- USER AUTH ---
app.post("/signup", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const existing = await db.collection("users").findOne({ email: req.body.email });
    if (existing) return res.status(400).json("Email already exists!");

    await db.collection("users").insertOne(req.body);
    res.status(200).json("Registered Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json("Error registering user");
  }
});

app.post("/login", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const user = await db.collection("users").findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) res.status(200).json(user);
    else res.status(400).json("Invalid credentials");
  } catch (err) {
    console.log(err);
    res.status(500).json("Login error");
  }
});

// --- FAIRS ---
app.get("/fairs", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const fairs = await db.collection("fairs").find().toArray();
    res.status(200).json(fairs);
  } catch (err) {
    res.status(500).json("Error fetching fairs");
  }
});

app.post("/fairs", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection("fairs").insertOne(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json("Error adding fair");
  }
});

// --- REGISTRATION ---
app.post("/register/:fairId", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    await db.collection("fairs").updateOne(
      { _id: new ObjectId(req.params.fairId) },
      { $push: { registrations: req.body } }
    );
    res.status(200).json("Registered Successfully");
  } catch (err) {
    res.status(500).json("Error registering for fair");
  }
});

// --- MESSAGES ---
app.post("/booth/:fairId/:boothId/message", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    await db.collection("fairs").updateOne(
      { _id: new ObjectId(req.params.fairId), "booths.id": req.params.boothId },
      { $push: { "booths.$.messages": req.body.message } }
    );
    res.status(200).json("Message Sent");
  } catch (err) {
    res.status(500).json("Error sending message");
  }
});