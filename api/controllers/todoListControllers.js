//Controllers are functions related to database
var mssql = require('mssql');
var db = require('../models/todoListModel.js');



 exports.list_all_tasks = function(req,res){
     db.sql('select * from tasks', function(err, task){
         if(err)
           res.send(err);
        res.json(task);
     });
    
 };

 exports.create_a_task = function (req, res) {
    var new_task = req.body;
    console.log(new_task);
    new_task.created_date = new Date();

    db.sql("INSERT INTO tasks (name, created_date, status)Values('"+req.body.name+"','"+ new_task.created_date+"','"+req.body.status+"')",function (err, task) {

        if (err)
          res.send(err);
        res.json(task);

    });
};
exports.read_a_task = function (req, res) {
    
    db.sql("SELECT * from tasks WHERE ID='"+ req.params.taskId +"'", function (err, task) {
        
        if (err)
            res.send(err);
        res.json(task);
    });
};

 exports.update_a_task = function (req, res) {
    
    db.sql("UPDATE tasks SET name='"+ req.body.name +"', status='"+req.body.status+"' where ID ='"+ req.params.taskId+"'", function (err, task) {
         if (err)
            res.send(err);
        res.json(task);
    });
 };

exports.delete_a_task = function (req, res) {
    db.sql("DELETE from tasks WHERE ID='"+ req.params.taskId +"'", function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


 