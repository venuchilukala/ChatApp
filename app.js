const http = require('http')
const path = require('path')
const express = require('express')
const {Server} = require('socket.io')

const app = express()
const PORT = 9000 
const server = http.createServer(app)
const io = new Server(server)

// Socket connection
io.on('connection', (socket) => {
    socket.on('user-message',(message)=>{
        io.emit('message', message)
    })
})

// Middlewares
app.use(express.static(path.resolve('./public')))

// Routes 
app.get('/', (req, res) => {
    return res.sendFile('/public/index.html')
})

server.listen(PORT, ()=>{
    console.log(`Sever started at http://localhost:9000`)
})