const express = require('express');
const chatRouter = require('./routes/chat.route');
const cors = require('cors');
const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());


app.use('/api', chatRouter);

module.exports = app;
