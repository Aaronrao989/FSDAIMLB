const express = require('express');
const cors = require('cors');
const fs = require('fs');
const port = 5656;
const app = express(); // create express app

// Middleware
app.use(cors());
app.use(express.json()); // middleware, convert the data into json format

// Routes
app.get("/", (req, res) => {
    res.send("<h2>Welcome to Express Server</h2>");
});

app.get("/msg", (req, res) => {
    res.json({ msg: "Hii, inside /msg endpoint" });
});

app.post("/register", (req, res) => {
    const data=req.body;
    console.log(data);
    res.json({ msg: "Registration api calling" });
});

app.post("/login", (req, res) => {
    res.json({ msg: "Login api calling" });
});

// Start server
app.listen(port, () => {
    console.log("Server is running on port: " + port);
});
