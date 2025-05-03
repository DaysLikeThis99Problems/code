// server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const getGeminiReply = require("./gemini");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;
        const reply = await getGeminiReply(userMessage);
        res.json({ reply });
    } catch (err) {
        console.error("Gemini Error:", err);
        res.status(500).json({ error: "Failed to get response from Gemini" });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


