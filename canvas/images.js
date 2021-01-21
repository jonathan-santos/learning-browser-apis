const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Getting images directly
const img = new Image()
img.src = './assets/pudim.jpg'
img.addEventListener('load', () => {
    ctx.drawImage(img, 10, 10, 100, 100)
})

// Getting images with a data url, has the advantage of using less bandwith, because of the lack of necesity of another round trip to the server. But has the disavantage of the image not being cached
const img2 = new Image()
img2.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw=='
img2.addEventListener('load', () => {
    ctx.drawImage(img2, 120, 10, 100, 100)
})

// Complex example
const img3 = new Image()
img3.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png'
img3.onload = () => {
    ctx.drawImage(img3, 240, 10)
    ctx.beginPath()
    ctx.moveTo(270, 106)
    ctx.lineTo(310, 76)
    ctx.lineTo(343, 86)
    ctx.lineTo(410, 25)
    ctx.stroke()
};

// Manual tiling
const img4 = new Image()
img4.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg'
img4.onload = () => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.drawImage(img4, j * 50, 175 + i * 38, 50, 38)
        }
    }
}

// Slicing
const img5 = new Image()
img5.src = 'https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png'
img5.onload = () => {
    ctx.drawImage(img4, 33, 71, 104, 124, 195, 195, 87, 104)
    ctx.drawImage(img5, 175, 175)
}
