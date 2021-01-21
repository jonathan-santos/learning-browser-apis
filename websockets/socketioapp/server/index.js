const http = require('http').createServer()
const io = require('socket.io')(http, {
    cors: { origin: '*'}
})

io.on('connection', socket => {
    console.log('User connected')

    socket.on('message', message => {
        console.log(`message: ${message}`)
        io.emit('message', `${socket.id.substr(0, 2)} said "${message}"`)
    })
})

http.listen(8080, () => {
    console.log('Server started \nListening in port 8080')
})