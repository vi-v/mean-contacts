var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//connect to mongodb
const db_url = 'mongodb://vishnu:12345@ds155841.mlab.com:55841/mean-contacts'
mongoose.connect(db_url);

//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
    if(err) {
        console.log('error connecting to db: '+err);
    }
});

//Middleware
app.use(cors());
app.use(bodyparser.json());

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//PORT
const port = 3000;

app.get('/', (req, res) => {
    res.send('app');
});

//Routes
const route = require('./routes/route');
app.use('/api', route);

app.listen(port, () => {
    console.log('Server started at port '+port+' ...');
});

