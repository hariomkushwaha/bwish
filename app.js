const express = require("express");
const bodyParser = require("body-parser");
const ejs= require("ejs");
const port = process.env.PORT || 3000

const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',function(req,res){
    res.render("index");
})

app.get('/song',function(req,res){
    res.render("song");
})
app.get('/book',function(req,res){
    res.render("book");
})
app.get('/bdh2',function(req,res){
    res.render("bdh2");
})
app.get('/last',function(req,res){
    res.render("last");
})

app.post('/',function(req,res){
    const name = req.body.puzz;
    console.log(name);
    if(req.body.puzz === "khushi"||"khushboo"){
        res.redirect("/song");
    }else{
        res.redirect('/');
    }
})

app.listen(port,function(){
    console.log("server is running"+ port);
})