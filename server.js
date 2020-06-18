// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/build"));
var port = process.env.PORT || 3000;
app.listen(port);
console.log('server started '+ port);
app.get("/implicit/callback",(req,res)=>{
    res.redirect('/index.html');
});
