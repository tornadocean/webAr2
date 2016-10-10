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

router.get('/api/nav', function (req, res) {
    res.send({
        data: [
            'Home',
            'About'
        ]
    });
});

module.exports = router;