const express = require('express');
const App = express();
const urlController = require('../controllers/urlController');

App.get('/', urlController.mainPage_get);

App.post('/', urlController.urlToQuantrl_post);

App.get('/:quantrl', urlController.redirect_url);

module.exports = App;