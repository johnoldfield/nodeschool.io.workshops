var http = require('http')
var fs = require('fs')

var  port = process.argv[2];
var  location = process.argv[3];

var server = http.createServer(function (req, res) {

    var src  = fs.createReadStream(location);
    src.pipe(res);

})

server.listen(port)


//Here's the official solution in case you want to compare notes:
//
//var http = require('http')
//var fs = require('fs')
//
//var server = http.createServer(function (req, res) {
//    res.writeHead(200, { 'content-type': 'text/plain' })
//
//    fs.createReadStream(process.argv[3]).pipe(res)
//})
//
//server.listen(Number(process.argv[2]))