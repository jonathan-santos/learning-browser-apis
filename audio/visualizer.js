const audioCtx = new window.AudioContext()

const sinewaveCanvas = document.querySelector('#sinewave')
const sinewaveCtx = sinewaveCanvas.getContext('2d')

const barsCanvas = document.querySelector('#bars')
const barsCtx = barsCanvas.getContext('2d')

const clearColor = '#EEEEEE'
const sinewaveColor = '#FF0000'
const barsColor = '#FF0000'

const track = audioCtx.createMediaElementSource(document.querySelector('audio'))
const analyser = audioCtx.createAnalyser()
const bufferLength = analyser.frequencyBinCount
const dataArray = new Uint8Array(bufferLength)
track.connect(analyser).connect(audioCtx.destination)

drawSinewave()
drawBars()

function drawSinewave() {
    const canvas = sinewaveCanvas
    const ctx = sinewaveCtx

    analyser.getByteTimeDomainData(dataArray)

    ctx.fillStyle = clearColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.lineWidth = 2
    ctx.strokeStyle = sinewaveColor
    ctx.beginPath()

    const sliceWidth = canvas.width * 1.0 / bufferLength

    let x = 0
    for (let i = 0; i < bufferLength; i++) {
        let v = dataArray[i] / 128.0
        let y = v * canvas.height / 2

        if (i === 0)
            ctx.moveTo(x, y)
        else
            ctx.lineTo(x, y)

        x += sliceWidth
    }

    ctx.lineTo(canvas.width, canvas.height / 2)
    ctx.stroke()

    requestAnimationFrame(drawSinewave)
}

function drawBars() {
    const canvas = barsCanvas
    const ctx = barsCtx

    analyser.getByteFrequencyData(dataArray)

    ctx.fillStyle = clearColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const barWidth = (canvas.width / bufferLength) * 2.5
    let barHeight = 0
    let x = 0

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]
        
        ctx.fillStyle = barsColor //'rgb(' + (barHeight + 100) + ',50,50)'
        ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight)

        x += barWidth + 1
    }

    requestAnimationFrame(drawBars)
}
