var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})


// SOLUTION
// var fs = require('fs')

// fs.readFile(process.argv[2],function readMe (err,data){
// 	if (err) return console.error(err)

// 		var lines = data.toString().split('\n').length - 1
// 		console.log(lines)

// })