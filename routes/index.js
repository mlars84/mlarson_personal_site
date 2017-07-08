const express = require('express');
const router = express.Router();
const path = require('path');


// BASE ROUTE
router.get('/', function(req,res){
    res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;
