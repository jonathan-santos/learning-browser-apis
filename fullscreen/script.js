const div = document.querySelector('div')
const canvas = document.querySelector('canvas')
const video = document.querySelector('video')
const img = document.querySelector('img')

function toggleFullScreen(element) {
    if (!document.fullscreenElement)
        element.requestFullscreen()
    else
        document.exitFullscreen()
}

div.addEventListener('click', e => {
    toggleFullScreen(e.target)
})

canvas.addEventListener('click', e => {
    toggleFullScreen(e.target)
})

video.addEventListener('click', e => {
    toggleFullScreen(e.target)
})

img.addEventListener('click', e => {
    toggleFullScreen(e.target)
})

const ctx = canvas.getContext('2d')
let x = -50, y = -50
draw()
function draw() {
    ctx.fillStyle = '#EEE'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    ctx.fillStyle = '#FF0000'
    ctx.fillRect(x, y, 50, 50)

    x += 1
    y += 0.55

    if (x >= canvas.width && y > canvas.height) {
        x = -50
        y = -50
    }
    
    requestAnimationFrame(draw)
}
