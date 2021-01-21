const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.font = '16px seriff'

// Composition Style
function showCompositionStyle(styleName, x, y) {
    ctx.globalCompositeOperation = styleName

    ctx.fillStyle = '#000'
    ctx.fillText(styleName, x + 15, y + 5) // Default

    ctx.fillStyle = '#FF0000'
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.arc(x + 50, y + 59, 50, 0, 360)
    ctx.fill()

    ctx.fillStyle = '#0000FF'
    ctx.fillRect(x + 10, y + 18, 80, 80)
}

showCompositionStyle('source-over', 10, 10)

// Clip
ctx.beginPath();
ctx.arc(120, 15, 100, 0, 360);
ctx.clip();

const gradient = ctx.createRadialGradient(120, 15, 0, 100, 100, 100)
gradient.addColorStop(0, '#0000FF');
gradient.addColorStop(0.8, '#FF0000');

ctx.fillStyle = gradient
ctx.fillRect(120, 15, 100, 100)
