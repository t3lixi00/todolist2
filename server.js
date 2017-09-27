// protocols

var express = require('express');
var app = express();
port = process.env.PORT || 3000;

mssql = require('mssql'),
db = require('./api/models/todoListModel'),
bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);
console.log('to do list RESTful API server started on: ' + port);