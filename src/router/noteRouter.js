const express = require('express');
const { getNotesController } = require('../controller');
const { postNotesController } = require('../controller');

const noteRouter = express.Router();

noteRouter.get('/', getNotesController);
noteRouter.post('/', postNotesController);

module.exports = noteRouter;
