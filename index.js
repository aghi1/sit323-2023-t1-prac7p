var express = require('express')
var app = express()

app.get('/', function (req,res) {
    res.send('Hello world Im Aghilesh')

})

app.listen(3000)