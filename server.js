const express = require("express");
const app = express();
const port = 3000;
const version=2;
app.use('/',  express.static('public'))
app.get('/health', function(req, res){
    if(version==1) {
        res.status(201);
    }else {
        res.status(202);
    }
    res.send("App is up and running");
});
app.post('/hello', function (req, res) {
    console.log("header");
    console.log(req.headers);
    console.log("body");
    console.log(req.body);
    console.log("params");
    console.log(req.params);
    console.log("query");
    console.log(req.query);
     res.send("printed on log please check");
});
app.get('/hello', function (req, res) {
    console.log("header");
    console.log(req.headers);
    console.log("body");
    console.log(req.body);
    console.log("params");
    console.log(req.params);
    console.log("query");
    console.log(req.query);
   
    console.log(req.methods);
    res.send("printed on log please check");
  })
app.listen(port, ()=> console.log(`Server is running on Port ${port}`));
