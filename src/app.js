require('dotenv').config();
const express = require('express');
const { join } = require('path');
const router = require('./router');

const app = express();
app.set('port', process.env.PORT || 5000);
app.use(express.static(join(__dirname, '../public'), { 'max-age': '30d' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

module.exports = { app };