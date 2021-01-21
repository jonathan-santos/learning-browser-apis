const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Translate
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        ctx.save()
        ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)'
        ctx.translate(10 + j * 50, 10 + i * 50)
        ctx.fillRect(0, 0, 25, 25)
        ctx.restore()
    }
}

// Rotate
ctx.save()

ctx.translate(200, 10) // Very useful together with rotate, because without it it is much more difficult to position it where you want
ctx.rotate((Math.PI / 180) * 45) // (Math.PI / 180) * x = degrees, by default it uses radians

ctx.fillStyle = '#4D4E53'
ctx.fillRect(0, 0, 50, 50) // This new position is in relation to the rotated graph
ctx.restore() // Everything back to normal

ctx.save()
ctx.translate(300, 10)
ctx.rotate((Math.PI / 180) * 77)

ctx.fillStyle = '#4D4E53'
ctx.fillRect(0, 0, 50, 50)
ctx.restore()

// Scale
ctx.save()
ctx.scale(5, 5)
ctx.fillStyle = 'blue'
ctx.fillRect(2, 30, 25, 25) // Because of the scale, the resulting filled rect will be (10, 150, 125, 125)
ctx.restore()

// Negative scale, draw mirrored
ctx.save()
ctx.scale(-1, -1)
ctx.fillStyle = 'orange'
ctx.fillRect(-250, -250, 100, 100)
ctx.restore()

// mirror horizontally only
ctx.save()
ctx.scale(-1, 1);
ctx.font = '32px serif';
ctx.fillText('Something', -300, 120);
ctx.restore()

// Transform
ctx.save()
// ctx.transform(1, 0, 0, 1, 0, 0) // identity matrix, or default
// ctx.transform(2, 0, 0, 1, 0, 0) // All subsequent drawings now are 2x larger horizontally
// ctx.transform(1, 0, 0, 1.2, 0, 0) // All subsequent drawings now are 2x larger vertically
// ctx.transform(1, 0.5, 0, 1, 0, 0) // All subsequent drawings now are skewed 50% horizontally
// ctx.transform(1, 0, 0.5, 1, 0, 0) // All subsequent drawings now are skewed 50% vertically
ctx.transform(1, 0, 0, 1, 50, 50) // Same as ctx.translate(50, 50), now the origin point is 50px more to the right on bottom

// ctx.resetTransform() // Reset transform to the identity matrix
// ctx.setTransform(1, 0, 0, 1, 0, 0) // Undoes the last transform to identity matrix and applies the new transform

ctx.fillStyle = 'red'
ctx.fillRect(10, 300, 100, 100)
ctx.restore()