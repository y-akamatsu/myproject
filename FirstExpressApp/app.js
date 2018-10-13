const express = require("express");
const app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/cat", function(req, res){
    res.send("MEOW");
});

app.get("*", function(req, res){
    res.send("YOU ARE STAR!");
});

app.listen(3000, function(){
    console.log("Server has started!");
});