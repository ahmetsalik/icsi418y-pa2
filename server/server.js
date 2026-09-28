const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const client = new MongoClient(process.env.MONGO_URI);

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        app.listen(9000, () => {
            console.log("Server running on port 9000");
        });
    } catch (error) {
        console.error("MongoDB connection failed");
        console.error(error);
    }
}

app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
});

startServer();