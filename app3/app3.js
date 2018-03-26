var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qZ5aOg7qz4fXwoOg',
    database: 'game1'
});
var putname;

connection.connect(function (err) {
    if (err) {
        console.log('Error Connecting', err.stack);
        return;
    }
    console.log('Connected as id', connection.threadId);
});

app.get('/users', function (req, res) {
    //res.end('hello');
    quertAllUser(function(err,result){
        res.end(result);
    });
});

/*app.get('/user', function (req, res) {
    //res.end('hello');
    quertUser(function(err,result){
        res.end(result);
    });
});*/

app.get('/user/:name', function (req, res) {
    var name = req.params.name;
    putname = req.params.name;
    console.log(name);
    
});

var server = app.listen(8081, function () {
    console.log('Server: Running');
});

function quertAllUser(callback) {
    var json = '';
    connection.query('SELECT * FORM game1.user', function (err, rows, fields) {
        if (err) throw err;

        json = JSON.stringify(rows);

        callback(null, json);
    });
}
function quertUser(callback) {
    var json = '';
    connection.query("SELECT * FORM game1.user WHERE Name ='"+putname+"';", function (err, rows, fields) {
        if (err) throw err;

        json = JSON.stringify(rows);

        callback(null, json);
    });
}