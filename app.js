const http = require('http')
const path = require('path')
const express = require('express')

const app = express()
const PORT = 9000 
const server = http.createServer(app)

// Middlewares
app.use(express.static(path.resolve('./public')))

// Routes
app.get('/', (req, res) => {
    return res.sendFile('/public/index.html')
})

server.listen(PORT, ()=>{
    console.log(`Sever started at http://localhost:9000`)
})