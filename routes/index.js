var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
});

router.get('/jsonp', function(req, res) { //#返回jsonp  
    res.jsonp({ status: 'jsonp' });
});

router.get('/json', function(req, res) { //#返回json  
    res.send({ status: req.query.name });
});

module.exports = router;