const express = require("express");
const app = express();
// const hostname = "127.0.0.1";
const port = 80;

const path = require("path");
app.use("/static",express.static("static"));
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));
app.get("/",(req,res)=>{
res.status(200).render("home.pug");
})
app.get("/developer",(req,res)=>{
res.status(200).render("developer.pug");
})
app.get("/contact",(req,res)=>{
    res.status(200).render("contact_us.pug");
    }) 
app.get("/vlog",(req,res)=>{
    res.status(200).render("vlog.pug");
        }) 
// creating the server 
app.listen(port,()=>{
    console.log(`the site successfully running on the ${port} `);
})