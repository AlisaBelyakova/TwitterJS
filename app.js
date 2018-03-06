const express = require( 'express' ); 
const app = express();  //create server 
const nunjucks = require('nunjucks');

const routes = require('./routes');
app.use('/', routes);

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

app.get('/', function(req, res){
    res.send('index.html'); //WHY we cannot use callback func
});


// nunjucks.render('index.html', localVars, function(err, res) {
//     console.log(res);
// });

const port = 3000;
app.listen(port, function(){
    console.log(`we are listening on ${port}`);
})