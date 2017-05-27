var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//Routes
const route = require('./routes/route');
app.use('/api', route);

//Middleware
app.use(cors());
app.use(bodyparser.json());

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//PORT
const port = 3000;

app.get('/', (req, res) => {
    res.send('app');
})

app.listen(port, () => {
    console.log('Server started at port '+port+' ...');
});

