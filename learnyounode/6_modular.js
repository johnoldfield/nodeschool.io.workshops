var fs = require('fs')
var path = require('path')


var readAndFilter = require('./6_readAndFilter.js')
var dir     = process.argv[2];
var ext     = process.argv[3];

readAndFilter(dir, ext, function (err, list) {
    if (err)
        return console.error('There was an error:', err)

    list.forEach(function (file) {
        console.log(file)
    })
})