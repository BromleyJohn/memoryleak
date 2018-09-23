const express = require('express')
const app = express()
const path = require('path')


app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))

app.use(express.static(__dirname+'/public'))

app.listen(80, () => console.log('app listening on port 80'))
