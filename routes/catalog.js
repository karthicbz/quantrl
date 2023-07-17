const express = require('express');
const App = express();
const urlController = require('../controllers/urlController');

App.get('/', urlController.mainPage_get);

module.exports = App;