const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Basic use
const rectangle = new Path2D()
rectangle.rect(10, 10, 50, 50)

const circle = new Path2D()
circle.arc(100, 35, 25, 0, 2 * Math.PI)

ctx.stroke(rectangle);
ctx.fill(circle);

// SVG
let svg = new Path2D('M140 10 h 80 v 80 h -80 Z')
ctx.stroke(svg)
