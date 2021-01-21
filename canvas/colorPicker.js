const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const img = new Image()
img.src = './assets/pudim.jpg'
img.onload = () => ctx.drawImage(img, 0, 0)

const selectedColor = document.createElement('p')
selectedColor.textContent = 'None'
selectedColor.style.borderRadius = '0.2rem'
selectedColor.style.padding = '0.2rem'
document.body.appendChild(selectedColor)

canvas.addEventListener('mousemove', e => {
    const { left, top } = canvas.getBoundingClientRect()
    const x = e.layerX - left;
    const y = e.layerY - top;

    const pixel = ctx.getImageData(x, y, 1, 1)
    const [r, g, b] = pixel.data

    const rgb = `rgb(${r}, ${g}, ${b})`
    selectedColor.style.background = rgb;
    selectedColor.textContent = rgb;
})

canvas.addEventListener('mouseout', e => {
    selectedColor.style.background = 'transparent';
    selectedColor.textContent = 'None';
})
