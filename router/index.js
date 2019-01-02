var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index', {
        title: "MY HOMEPAGE",
        length: 5
    })
});

module.exports = router;