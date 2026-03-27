const express = require("express");
const chatRouter = require("./routes/chat.route")
const app = express();

app.use(express.json());
app.use("/api", chatRouter);

module.exports = app;