var express = require('express'),
    app = express();

app.use(express.static(__dirname + ''));

console.log("app start");
app.listen(8080)
