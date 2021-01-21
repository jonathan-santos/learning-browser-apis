const socket = new WebSocket('ws://localhost:8080')

socket.onmessage = ({ data }) => {
    console.log(`Message from server: ${data}`)
}

document.querySelector('button').onclick = () => {
    socket.send('Hello there')
}
