const socket = io('ws://localhost:8080')

document.querySelector('form').onsubmit = e => {
    e.preventDefault()

    const text = document.querySelector('input').value
    socket.emit('message', text)
}

socket.on('message', message => {
    const li = document.createElement('li')
    li.innerHTML = message

    document.querySelector('ul').appendChild(li)
})
