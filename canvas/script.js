const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let videoElement

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    videoElement = document.createElement('video')
    videoElement.srcObject = stream
    videoElement.play()
    videoElement.hidden = true
    document.body.appendChild(videoElement)
    requestAnimationFrame(draw)
}).catch(error => {
    alert('There has been an error')
    console.log(`error: ${error}`)
})

function draw() {
    ctx.drawImage(videoElement, 0, 0)

    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < frame.data.length; i += 4) {
        const r = frame.data[i]
        const g = frame.data[i + 1]
        const b = frame.data[i + 2]

        if ((r > 150 && g < 80 && b < 80)) 
            frame.data[i]
        else {
            const avg = (frame.data[i] + frame.data[i + 1] + frame.data[i + 2]) / 3
            frame.data[i] = avg
            frame.data[i + 1] = avg
            frame.data[i + 2] = avg
        }
    }

    ctx.putImageData(frame, 0, 0)
    requestAnimationFrame(draw)
}