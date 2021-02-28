const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)

app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html')

})
io.on('connection', function(socket){
    socket.on("pesan-dikirim", function (pesan){
        io.emit("pesan dikirim", pesan)
    })
})

const PORT = process.env.PORT || 3000;
server.listen(PORT);