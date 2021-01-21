const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const box = {
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 25,
    width: 25,
    height: 25,
    velocityX: 5,
    velocityY: 5,
}

let mainLoop = requestAnimationFrame(draw)

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#ff0000'
    ctx.fillRect(box.x, box.y, box.width, box.height)

    box.x += box.velocityX
    box.y += box.velocityY

    if (box.x <= 0 || box.x + box.width >= canvas.width)
        box.velocityX *= -1
    if (box.y <= 0 || box.y + box.height >= canvas.height)
        box.velocityY *= -1

    mainLoop = requestAnimationFrame(draw)
}
