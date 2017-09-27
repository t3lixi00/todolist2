// protocols

var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

const mssql = require('mssql'),
const db = require('./api/models/todoListModel');
const bodyParser = require('body-parser');




//app.use(bodyParser.urlencoded({ extended: true}));
//app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port, function() {
    console.log('to do list RESTful API server started on: ' + port);
});


/*const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})*/