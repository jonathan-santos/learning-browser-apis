const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.strokeStyle = '#666'
ctx.fillStyle = '#FF0000'

// filled triangle
ctx.beginPath()
ctx.moveTo(25, 50)
ctx.lineTo(50, 75)
ctx.lineTo(50, 25)
ctx.fill()

// Unclosed stroked triangle
ctx.beginPath()
ctx.moveTo(75, 50) // moveTo is like lifting the pen and moving it, it will move the pen, but will not draw on the path
ctx.lineTo(100, 75) // lineTo will move the pen and draw on the path to the new position
ctx.lineTo(100, 25)
ctx.stroke()

// Closed stroked triangle
ctx.beginPath()
ctx.moveTo(125, 50)
ctx.lineTo(150, 75)
ctx.lineTo(150, 25)
ctx.closePath() // Will move the pen to the starting position of the path
ctx.stroke()

// Stroked rect
ctx.beginPath()
ctx.rect(200, 25, 100, 50)
ctx.stroke()

// Filled rect
ctx.beginPath()
ctx.rect(350, 25, 100, 50)
ctx.fill()

// Smiley face with arcs
ctx.beginPath()
ctx.arc(75, 175, 50, 0, Math.PI * 2) // Outer circle
ctx.moveTo(110, 175)
ctx.arc(75, 175, 35, 0, Math.PI) // Mouth
ctx.moveTo(65, 165)
ctx.arc(60, 165, 5, 0, Math.PI * 2) // Left eye
ctx.moveTo(95, 165)
ctx.arc(90, 165, 5, 0, Math.PI * 2)
//ctx.closePath() // Will result in nothing, because the path had empty spaces, so it can't "close" the path
ctx.stroke()

// Circles
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
        ctx.beginPath()
        let x = 50 + j * 50 // x coordinate
        let y = 275 + i * 50 // y coordinate
        let radius = 20 // Arc radius
        let startAngle = 0 // Starting point on circle
        let endAngle = Math.PI + (Math.PI * j) / 2 // End point on circle
        let anticlockwise = i % 2 !== 0 // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

        if (i > 1) {
            ctx.fill()
        } else {
            ctx.stroke()
        }
    }
}

// Quadratric curves
ctx.beginPath()
ctx.moveTo(275, 125)
ctx.quadraticCurveTo(225, 125, 225, 162.5)
ctx.quadraticCurveTo(225, 200, 250, 200)
ctx.quadraticCurveTo(250, 220, 230, 225)
ctx.quadraticCurveTo(260, 220, 265, 200)
ctx.quadraticCurveTo(325, 200, 325, 162.5)
ctx.quadraticCurveTo(325, 125, 275, 125)
ctx.stroke()

// Cubic curves
ctx.beginPath();
ctx.moveTo(475, 140);
ctx.bezierCurveTo(475, 137, 470, 125, 450, 125);
ctx.bezierCurveTo(420, 125, 420, 162.5, 420, 162.5);
ctx.bezierCurveTo(420, 180, 440, 202, 475, 220);
ctx.bezierCurveTo(510, 202, 530, 180, 530, 162.5);
ctx.bezierCurveTo(530, 162.5, 530, 125, 500, 125);
ctx.bezierCurveTo(485, 125, 475, 137, 475, 140);
ctx.fill();
