var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('angular', { title: 'Angular2 Start' });
});

router.get('/api/nav', function (req, res) {
    res.send({ 
       data:  [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ]
    });
});

module.exports = router;