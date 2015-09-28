/**
 * Created by gfrethem on 9/27/15.
 */
var express = require('express');
var app = express();
var students = require('./public/assets/data/students');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/views/index.html");
});

app.get('/getStudents', function(request, response) {
    response.send(students);
    console.log('Sent students.json');
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});