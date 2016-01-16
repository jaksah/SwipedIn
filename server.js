var express = require('express'),
    morgan = require('morgan');

var app = express();
var env = process.env.NODE_ENV || 'development';

var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 3001;

//Setup logging
if(env=='development'){
    app.use(morgan('dev'));
}else{
    app.use(morgan('common'));
}

app.use(express.static('public'));

server = app.listen(port,host,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});