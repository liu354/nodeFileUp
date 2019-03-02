var express = require('express');
var multer = require("multer");
var upload = multer({dest:'./uploads'});
var router = express.Router();
var fs = require("fs");
var app=express();

app.all('/uploader', upload.array('files', 12),function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.files);
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        res.send({code:200});
        next();
    }
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});