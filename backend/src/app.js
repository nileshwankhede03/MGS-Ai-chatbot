const express = require('express');
const chatRouter = require('./routes/chat.route');
const cors = require('cors');
const morgan = require("morgan")
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
  }),
);

app.use(express.json());
app.use(morgan("dev"));

app.use('/api', chatRouter);

module.exports = app;
