const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'rgb(200, 0, 0)'
ctx.fillRect(10, 10, 50, 50)

ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
ctx.fillRect(30, 30, 50, 50)

ctx.fillStyle = 'rgba(0, 0, 0, 1)'
ctx.fillRect(100, 25, 100, 100)
ctx.clearRect(120, 45, 60, 60)
ctx.strokeRect(125, 50, 50, 50)
