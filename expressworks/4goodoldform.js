var express = require('express')
var bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.urlencoded({extended: false})) // 'use' must be at this scope level


app.post('/form', function(req, res) {
    var response = req.body.str.split('').reverse().join('');
    res.end(response);

})

app.listen(process.argv[2])


//Official Solution
//
//var express = require('express')
//var bodyParser = require('body-parser')
//var app = express()
//
//app.use(bodyParser.urlencoded({extended: false}))
//
//app.post('/form', function(req, res) {
//    res.send(req.body.str.split('').reverse().join(''))
//})
//
//app.listen(process.argv[2])