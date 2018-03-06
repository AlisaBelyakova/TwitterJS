const express = require( 'express' ); 
const app = express();  //create server 
const nunjucks = require('nunjucks');

app.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    console.log(res.statusCode)
    // continue doing what we were doing and go to the route
    next(); 
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

let localVars = {
    title: 'Example Title',
    people: [
        {name: 'Alisa'},
        {name: 'Lisa'},
        {name: 'Harry'},
        {name: 'Bobby'},
    ]
};

app.get('/hello', function(req, res){
    res.render('index.html', localVars);
});


nunjucks.render('index.html', localVars, function(err, res) {
    console.log(res);
});
    
    
    
// const people = [{name: 'Mary'}, {name: 'Steve'}, {name: 'Jack'}];
// res.render('index', {title: 'Title', people: people});


const port = 3000;
app.listen(port, function(){
    console.log(`we are listening on ${port}`);
})