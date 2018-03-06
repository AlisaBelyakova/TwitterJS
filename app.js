const express = require( 'express' ); 
const app = express();  //create server 

app.get('/', function(req, res){
    res.send('Hey there!')
})


const port = 3000;
app.listen(port, function(){
    console.log(`we are listening on ${port}`);
})