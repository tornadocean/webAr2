var express = require('express');
var path = require('path');
var browserSync = require('browser-sync');
var routes = require('./routes/index');

    
var app = express();
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', routes);


app.get('/api/nav', function (req, res) {
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

app.get('*', function(req, res, next) {
     res.redirect('/');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


// //module.exports = app;
// var port = process.env.PORT || 8080;
// app.listen(port, function() {
//     console.log("App server start at " + port);
// })

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    browserSync({
        proxy: 'localhost:' + port,
        files: [__dirname + '/public/**/*.{js,css,html}']
    });
    console.log("Yo!! The server is listening on port: " + listeningPort);
});

