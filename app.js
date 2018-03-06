const express = require( 'express' ); 
const app = express();  //create server 

app.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    console.log(res.statusCode)
    // continue doing what we were doing and go to the route
    next(); 
});

app.get('/', function(req, res){
    res.send('Hey there!')
})


const port = 3000;
app.listen(port, function(){
    console.log(`we are listening on ${port}`);
})