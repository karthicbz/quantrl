const asynchandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');

exports.mainPage_get = asynchandler(async(req, res)=>{
    res.render('mainpage');
})

exports.redirect_url = asynchandler(async(req, res)=>{
    res.redirect('https://www.youtube.com/watch?v=XxbJw8PrIkc');
})