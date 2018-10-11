const express = require("express");
const app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/cat", function(req, res){
    res.send("MEOW");
});

app.listen(3000, function(){
    console.log("Server has started!");
});