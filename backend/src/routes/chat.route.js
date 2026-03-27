const express = require('express');
const chatController = require('../controller/chat.controller.js');
const chatRouter = express.Router();

chatRouter.post('/chat', chatController.chatController);

module.exports = chatRouter;
