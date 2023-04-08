const express = require('express');
const { getNotesController } = require('../controller');

const noteRouter = express.Router();

noteRouter.get('/', getNotesController);

module.exports = noteRouter;
