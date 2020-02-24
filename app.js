const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.get('/', function (req,res) {
    res.send("Hello");
});
app.get('/movies', function (req,res) {
    res.send(' films');
});
app.get('/movies/1', function (req,res) {
    res.send(' films1');
});



app.listen(8080,function() {
    console.log("listen on port 3000");
});
