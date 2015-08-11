/**
 * Created by john.oldfield on 10/08/2015.
 */

var net = require('net')
var listeningPort = process.argv[2];

var server = net.createServer(function (socket) {

        d = new Date();
    s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
    socket.end(s);

})
server.listen(listeningPort)

function pad(n) { return n < 10 ? '0' + n : n }



//var net = require('net')
//
//function zeroFill(i) {
//    return (i < 10 ? '0' : '') + i
//}
//
//function now () {
//    var d = new Date()
//    return d.getFullYear() + '-'
//        + zeroFill(d.getMonth() + 1) + '-'
//        + zeroFill(d.getDate()) + ' '
//        + zeroFill(d.getHours()) + ':'
//        + zeroFill(d.getMinutes())
//}
//
//var server = net.createServer(function (socket) {
//    socket.end(now() + '\n')
//})
//
//server.listen(Number(process.argv[2]))
