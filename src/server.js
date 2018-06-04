var express = require("express");
var app = express();
var path = require("path");


app.use(express.static(path.join(__dirname + '/css')));
app.use(express.static(path.join(__dirname + '/image')));
app.use(express.static(path.join(__dirname + '/src')));

app.get('/users', function(req, res){
	res.sendFile(path.join(__dirname+'/co.html'))
})

app.get('/admin', function(req, res){
	res.sendFile(path.join(__dirname+'/co_admin.html'))
})

app.get('/register', function(req, res){
	res.sendFile(path.join(__dirname+'/register.html'))
})

app.listen(3000);
console.log("running at port 3000")
