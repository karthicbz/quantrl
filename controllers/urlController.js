const asynchandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');
const HashIds = require('hashids');
const UrlModel = require('../models/urlModel');
let stringHash = require('string-hashids');

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
        // const hashIds = new HashIds(process.env.SALT, 10);
        const hash = stringHash.encode(req.body.bigurl, process.env.SALT);
        // const quantrlUrl = await hashIds.encode(req.body.bigurl);
        const newQuantrl = new UrlModel({
            url:req.body.bigurl,
            quantrl: hash,
        });

        if(!errors.isEmpty()){
            // console.log(typeof(errors));
            res.render('mainpage', {errors:errors.errors});
        }else{
            const quantrlFound = await UrlModel.findOne({url:req.body.bigurl}).exec();
            if(quantrlFound){
                res.render('mainpage', {quantrlDetails:quantrlFound.quantrl})
            }else{
                const doc = await newQuantrl.save();
                console.log(doc);
                res.render('mainpage',{quantrlDetails:doc.quantrl});
            }
        }
    }),
]

exports.redirect_url = asynchandler(async(req, res)=>{
    const originalUrl = await UrlModel.findOne({quantrl: req.params.quantrl}).exec();
    res.redirect(originalUrl.url);
})