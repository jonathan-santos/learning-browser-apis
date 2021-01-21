const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let raf
let running = false

const ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    radius: 25,
    color: 'blue',
    draw: function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

function clear() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function draw() {
    clear()

    ball.draw()

    ball.x += ball.vx
    ball.y += ball.vy

    ball.vy *= .99
    ball.vy += .25

    if (ball.x + ball.vx < 0 || ball.x + ball.vx + ball.radius > canvas.width)
        ball.vx *= -1
    else if (ball.y + ball.vy < 0 || ball.y + ball.vy + ball.radius >= canvas.height)
        ball.vy *= -1

    raf = window.requestAnimationFrame(draw)
}

canvas.addEventListener('mousemove', e => {
    if (!running) {
        clear()

        const { left, top } = canvas.getBoundingClientRect()
        ball.x = e.clientX - left
        ball.y = e.clientY - top

        ball.draw()
    }
})

canvas.addEventListener('click', () => {
    if (!running) {
        raf = window.requestAnimationFrame(draw)
        running = true
    }
})

canvas.addEventListener('mouseout', () => {
    window.cancelAnimationFrame(raf)
    running = false
})
