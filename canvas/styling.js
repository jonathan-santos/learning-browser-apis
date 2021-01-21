const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// fillStyle changes the color filled in all subsequent objetcs
ctx.fillStyle = 'orange'
ctx.fillRect(10, 10, 20, 20)

ctx.fillStyle = '#FFA500'
ctx.fillRect(40, 10, 20, 20)

ctx.fillStyle = 'rgb(255, 165, 0)'
ctx.fillRect(70, 10, 20, 20)

ctx.fillStyle = 'rgba(255, 165, 0, 0.5)'
ctx.fillRect(100, 10, 20, 20)

// Complex example
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ', 0)'
        ctx.fillRect(10 + j * 25, 40 + i * 25, 25, 25)
    }
}

// strokeStyle changes the color of all subsequent strokes
ctx.strokeStyle = 'orange'
ctx.strokeRect(130, 10, 20, 20)

ctx.strokeStyle = '#FFA500';
ctx.strokeRect(160, 10, 20, 20)

ctx.strokeStyle = 'rgb(255, 165, 0)'
ctx.strokeRect(190, 10, 20, 20)

ctx.strokeStyle = 'rgba(255, 165, 0, 0.5)'
ctx.strokeRect(220, 10, 20, 20)

// Complex example
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ')'
        ctx.beginPath()
        ctx.arc(180 + j * 25, 50 + i * 25, 10, 0, Math.PI * 2, true)
        ctx.stroke()
    }
}

// globalAlpha sets the transparency to all subsequent drawings
ctx.globalAlpha = 0.2

ctx.fillStyle = 'orange'
ctx.fillRect(250, 10, 20, 20)

ctx.fillStyle = '#FFA500';
ctx.fillRect(280, 10, 20, 20)

ctx.fillStyle = 'rgb(255, 165, 0)'
ctx.fillRect(310, 10, 20, 20)

ctx.fillStyle = 'rgba(255, 165, 0, 0.5)' // In this case, the result will be a transparency with value 0.1, because even if you set the alpha in style, the globalAlpha takes precedence, so the alpha in the style is used after it
ctx.fillRect(340, 10, 20, 20)

// Complex example
ctx.globalAlpha = 1

ctx.fillStyle = '#FD0'
ctx.fillRect(325, 40, 75, 75)
ctx.fillStyle = '#6C0'
ctx.fillRect(400, 40, 75, 75)
ctx.fillStyle = '#09F'
ctx.fillRect(325, 115, 75, 75)
ctx.fillStyle = '#F30'
ctx.fillRect(400, 115, 75, 75)
ctx.fillStyle = '#FFF'

// set transparency value
ctx.globalAlpha = 0.2

// Draw semi transparent circles
for (let i = 0; i < 7; i++) {
    ctx.beginPath()
    ctx.arc(400, 115, 10 + 10 * i, 0, Math.PI * 2, true)
    ctx.fill()
}

// lineWidth, self explanatory, but it does not necessarily correlate directly to pixels, so if not used with caution, blurry strokes can be done
ctx.globalAlpha = 1
for (let i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i
    ctx.beginPath()
    ctx.moveTo(10 + i * 14, 200)
    ctx.lineTo(10 + i * 14, 250)
    ctx.stroke()
}

// lineGuide
ctx.strokeStyle = 'black';
const lineCap = ['butt', 'round', 'square']
for (let i = 0; i < lineCap.length; i++) {
  ctx.lineWidth = 15
  ctx.lineCap = lineCap[i]
  ctx.beginPath()
  ctx.moveTo(175 + i * 25, 200)
  ctx.lineTo(175 + i * 25, 250)
  ctx.stroke()
}

// lineJoin
let lineJoin = ['round', 'bevel', 'miter']
ctx.lineWidth = 10
for (let i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i]
    ctx.beginPath()
    ctx.moveTo(10, 270 + i * 40)
    ctx.lineTo(50, 310 + i * 40)
    ctx.lineTo(90, 270 + i * 40)
    ctx.lineTo(130, 310 + i * 40)
    ctx.lineTo(170, 270 + i * 40)
    ctx.stroke()
}

// lineDash
ctx.lineWidth = 1

ctx.setLineDash([1, 3])
ctx.strokeRect(260, 200, 50, 50)

ctx.setLineDash([10, 5])
ctx.strokeRect(320, 200, 50, 50)

// lineDashOffset
ctx.setLineDash([10, 5])
ctx.lineDashOffset = 5
ctx.strokeRect(380, 200, 50, 50)

// Linear gradients
ctx.setLineDash([0, 0])

const lingrad = ctx.createLinearGradient(0, 250, 0, 400);
lingrad.addColorStop(0, '#00ABEB');
lingrad.addColorStop(0.5, '#fff');
lingrad.addColorStop(0.5, '#26C000');
lingrad.addColorStop(1, '#fff');

ctx.fillStyle = lingrad;
ctx.fillRect(200, 270, 130, 130);


const lingrad2 = ctx.createLinearGradient(0, 290, 0, 340);
lingrad2.addColorStop(0.5, '#000');
lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

ctx.strokeStyle = lingrad2;
ctx.strokeRect(237, 290, 50, 50);

// Radial Gradiant
// Create gradients
var radgrad = ctx.createRadialGradient(395, 315, 10, 402, 320, 30);
radgrad.addColorStop(0, '#A7D30C');
radgrad.addColorStop(0.9, '#019F62');
radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');

var radgrad2 = ctx.createRadialGradient(455, 375, 20, 462, 390, 50);
radgrad2.addColorStop(0, '#FF5F98');
radgrad2.addColorStop(0.75, '#FF0188');
radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');

var radgrad3 = ctx.createRadialGradient(445, 285, 15, 452, 290, 40);
radgrad3.addColorStop(0, '#00C9FF');
radgrad3.addColorStop(0.8, '#00B5E2');
radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');

var radgrad4 = ctx.createRadialGradient(350, 420, 50, 350, 410, 90);
radgrad4.addColorStop(0, '#F4F201');
radgrad4.addColorStop(0.8, '#E4C700');
radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');

ctx.fillStyle = radgrad4;
ctx.fillRect(350, 270, 150, 150);
ctx.fillStyle = radgrad3;
ctx.fillRect(350, 270, 150, 150);
ctx.fillStyle = radgrad2;
ctx.fillRect(350, 270, 150, 150);
ctx.fillStyle = radgrad;
ctx.fillRect(350, 270, 150, 150);

// Patterns
 // create new image object to use as pattern
const img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = () => {
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(500, 10, 50, 150);
}

// Shadow
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

ctx.font = '20px Times New Roman';
ctx.fillStyle = 'Black';
ctx.fillText('Sample String', 10, 450);

// fill method
// Normal
ctx.shadowColor = 'transparent'
ctx.fillStyle = '#000'
ctx.globalAlpha = 1
ctx.beginPath();
ctx.arc(520, 200, 30, 0, Math.PI * 2, true);
ctx.arc(520, 200, 15, 0, Math.PI * 2, true);
ctx.fill();

// Evenodd (don't fill where was previosly filled?)
ctx.fillStyle = '#000'
ctx.globalAlpha = 1
ctx.beginPath();
ctx.arc(520, 270, 30, 0, Math.PI * 2, true);
ctx.arc(520, 270, 15, 0, Math.PI * 2, true);
ctx.fill('evenodd');