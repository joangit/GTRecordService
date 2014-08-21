/**
 * Created by tommy_2 on 2014/8/20.
 */
var http = require('http');
//var querystring = require('querystring');

var httpNotify = {
    get: function(){
        //var post_data = querystring.stringify({});
        var options = {
            host : '192.168.16.141',
            port : 18001,
            path : '/query',
            method : 'GET'
        };

        var req = http.request(options, function(res){
            console.log('STATUS:' + res.statusCode);
            console.log('HEADERS:' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data',function(chunk){
                console.log('BODY:' + chunk);
            });
        });

        req.on('error',function(err){
            console.log('problem with request: ' + err.message);
        });

        req.write('data\n');
        req.write('data\n');
        req.end();
    },
    post:function(){
        console.log('ssss');
    }
};

experts = module.exports = httpNotify;



