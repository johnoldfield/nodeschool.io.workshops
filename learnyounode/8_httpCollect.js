/**
 * Created by john.oldfield on 10/08/2015.
 */
var http = require('http');

var url = process.argv[2];
var info = [];

http.get(url,function(res){

    res.setEncoding('utf8');

    res.on("data",function(input){
        info.push(input);
    });

    res.on("error",console.error);
    res.on("end",function(){
        console.log(info.join("").length);
        console.log(info.join(""));
    });
});

//var http = require('http')
//var bl = require('bl')
//
//http.get(process.argv[2], function (response) {
//    response.pipe(bl(function (err, data) {
//        if (err)
//            return console.error(err)
//        data = data.toString()
//        console.log(data.length)
//        console.log(data)
//    }))
//})