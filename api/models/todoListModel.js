
//Change to sql

const mssql = require('mssql');
const db = {}; //database in Azure

const config = {
    user:'test',
    password:'199228lxy!',
    server:'todolist22.database.windows.net',
    database:'todolist2',
    options: {
        encrypt: true
    },
    pool:{
        min:0,
        max:5,
        idleTimeoutMillis: 3000
    }
};

db.sql = function(sql, callback){
    var connection = new mssql.ConnectionPool(config, function(err){
        if(err){
            console.log(err);
            return;
        }
    var ps = new mssql.PreparedStatement(connection);
     ps.prepare(sql, function(err){
         if(err){
             console.log(err);
             return;
         }
     ps. execute('',function(err,result){
         if(err){
             console.log(err);
             return;
         }
     ps.unprepare(function(err){
         if(err){
             console.log(err);
             callback(err,null);
             return;
         }
         callback(err,result);
         
     })   
    
     })    
     })

       connection.release();
    })
    

}

module.exports = db;