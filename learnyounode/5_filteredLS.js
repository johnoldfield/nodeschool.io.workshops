var fs = require('fs')
var path = require('path')

var dirName = process.argv[2]
var fileExtFilter = process.argv[3]

fs.readdir(dirName,function readMe (err,list){
   if (err) return console.error(err)

   for (var i in list){
       if(path.extname(list[i]) === ("."+fileExtFilter)) {
           console.log(list[i])
       }

   }

})

//SOLUTION
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//     list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//             console.log(file)
//     })
// })