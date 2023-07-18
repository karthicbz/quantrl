const asynchandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');
const HashIds = require('hashids');
const UserModel = require('../models/urlModel');

exports.mainPage_get = asynchandler(async(req, res)=>{
    res.render('mainpage');
})

exports.urlToQuantrl_post = [
    body('bigurl')
    .trim()
    .notEmpty().withMessage('Url field should not be empty')
    .isURL({require_protocol:true, require_host:true}).withMessage('Not a valid url'),
    asynchandler(async(req, res)=>{
        const errors = validationResult(req);
        const hashIds = new HashIds(process.env.SALT, 10);
        const quantrlUrl = hashIds.encode(1);
        const newQuantrl = new UserModel({
            url:req.body.bigurl,
            quantrl: quantrlUrl,
        });

        if(!errors.isEmpty()){
            // console.log(typeof(errors));
            res.render('mainpage', {errors:errors.errors});
        }else{
            const doc = await newQuantrl.save();
            console.log(doc);
            res.render('mainpage',{quantrlDetails:doc});
        }
    }),
]

exports.redirect_url = asynchandler(async(req, res)=>{
    res.redirect('https://www.youtube.com/watch?v=XxbJw8PrIkc');
})