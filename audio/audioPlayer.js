const audioCtx = new window.AudioContext()

const audioElement = document.querySelector('audio')
let playing = false

const track = audioCtx.createMediaElementSource(audioElement)
const gainNode = audioCtx.createGain()
const panNode = audioCtx.createStereoPanner()

track.connect(gainNode).connect(panNode).connect(audioCtx.destination)

document.querySelector('#play').addEventListener('click', () => {
    if (audioCtx.state == 'suspended')
        audioCtx.resume()

    if (playing)
        audioElement.pause()
    else
        audioElement.play()

    playing = !playing
})

audioElement.addEventListener('ended', () => {
    playing = false
})

document.querySelector('#volume').addEventListener('input', e => {
    gainNode.gain.value = e.target.value
})

document.querySelector('#pan').addEventListener('input', e => {
    panNode.pan.value = e.target.value
})
