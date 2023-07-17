const express = require('express');
const App = express();
const urlController = require('../controllers/urlController');

App.get('/', urlController.mainPage_get);

App.get('/utube', urlController.redirect_url);

module.exports = App;