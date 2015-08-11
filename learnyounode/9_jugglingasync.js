/**
 * Created by john.oldfield on 10/08/2015.
 */

    // see https://github.com/nodeschool/discussions/issues/69


//var http = require('http');
//var urls = process.argv.slice(2,process.argv.length);
//var pages = [];
//var waiting = 0;
//
//urls.map(function(url,idx){
//    http.get(url,function(res){
//
//        waiting++;
//        var alldata = "";
//
//        res.setEncoding('utf8');
//
//        res.on('data',function(data){alldata += data});
//
//        res.on('end', function(){
//            pages[idx] = alldata;
//            waiting--;
//            if (!waiting) {
//                pages.map(function(page){console.log(page)});
//            }
//        });
//    });
//});

// NOTE : the key aspect is the count variable, which is used to ascertain when all callbacks are complete.


var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(results[i])
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)

            results[index] = data.toString()
            count++

            if (count == 3)
                printResults()
        }))
    })
}

for (var i = 0; i < 3; i++)
    httpGet(i)

