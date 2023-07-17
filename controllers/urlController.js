const asynchandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');

exports.mainPage_get = asynchandler(async(req, res)=>{
    res.render('mainpage');
})