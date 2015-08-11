var http = require('http')
var fs = require('fs')
var map = require('through2-map')
var url = require('url')
var  port = process.argv[2];

var server = http.createServer(function (req, res) {

 var fullUrl  = req.url;

    var data  = url.parse(fullUrl,true);

    res.push(data.toString());

})

server.listen(port)


//var http = require('http')
//var map = require('through2-map')
//
//var server = http.createServer(function (req, res) {
//    if (req.method != 'POST')
//        return res.end('send me a POST\n')
//
//    req.pipe(map(function (chunk) {
//        return chunk.toString().toUpperCase()
//    })).pipe(res)
//})
//
//server.listen(Number(process.argv[2]))