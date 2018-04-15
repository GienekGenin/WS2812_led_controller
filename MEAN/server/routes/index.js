const express = require('express');
let router = express.Router();

//Accept a get request
router.get('/', function (req,res,next) {
    //res.render('index.html');
    res.send('Api works');
});

module.exports = router;
