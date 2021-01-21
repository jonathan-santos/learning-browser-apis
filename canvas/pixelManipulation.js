const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

var img = new Image()
img.src = './assets/pudim.jpg'
img.onload = drawOriginal

const modesDiv = document.createElement('div')
const modes = ['original', 'inverted', 'grayscale']
modes.forEach(mode => {
    const input = document.createElement('input')
    input.type = 'radio'
    input.name = 'mode'
    input.value = mode

    const label = document.createElement('label')
    label.appendChild(input)
    label.innerHTML += mode
    
    modesDiv.appendChild(label)
})
document.body.appendChild(modesDiv)
document.querySelector('input').checked = true

function drawOriginal () {
    ctx.drawImage(img, 0, 0)
}

function drawInverted() {
    ctx.drawImage(img, 0, 0)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const { data } = imageData
    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i]
        data[i + 1] = 255 - data[i + 1]
        data[i + 2] = 255 - data[i + 2]
    }
    ctx.putImageData(imageData, 0, 0)
};

function drawGrayscale() {
    ctx.drawImage(img, 0, 0)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const { data } = imageData
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
        data[i] = avg
        data[i + 1] = avg
        data[i + 2] = avg
    }
    ctx.putImageData(imageData, 0, 0)
};

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', e => {
        const value = e.target.value
        if (value === 'inverted')
            drawInverted()
        else if (value === 'grayscale')
            drawGrayscale()
        else
            drawOriginal()
    })
})
