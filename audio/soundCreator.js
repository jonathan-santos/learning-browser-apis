const audioCtx = new window.AudioContext()

const config = {
    sample: null,
    sweepAttack: 0,
    sweepRelease: 0,
    pulseOsc1hz: 0,
    pulseOsc2hz: 0,
    noiseDuration: 0,
    noiseFrequency: 0,
    sampleSpeed: 0
}

fetch('./assets/sample2.mp3')
.then(res => res.arrayBuffer())
.then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
.then(sample => {
    config.sample = sample

    document.querySelector('main').style.display = 'block'
    document.querySelector('#loading').style.display = 'none'

    document.querySelector('#sweep').addEventListener('click', playSweep)
    document.querySelector('#pulse').addEventListener('click', playPulse)
    document.querySelector('#noise').addEventListener('click', playNoise)
    document.querySelector('#sample').addEventListener('click', playSample)

    const propsWithSlider = ['sweepAttack', 'sweepRelease', 'pulseOsc1hz', 'pulseOsc2hz', 'noiseDuration', 'noiseFrequency', 'sampleSpeed']
    propsWithSlider.forEach(prop => {
        const slider = document.querySelector(`#${prop}`)

        config[prop] = Number(slider.value)

        slider.addEventListener('input', e => {
            config[prop] = Number(e.target.value)
        })
    })
})

function playSweep () {
    const { sweepAttack, sweepRelease } = config

    const length = 2
    const wave = audioCtx.createPeriodicWave(wavetable.real, wavetable.imag)
    const osc = audioCtx.createOscillator()
    osc.setPeriodicWave(wave)
    osc.frequency.value = 440

    const sweepGain = audioCtx.createGain()
    sweepGain.gain.cancelScheduledValues(audioCtx.currentTime)
    sweepGain.gain.setValueAtTime(0, audioCtx.currentTime)

    sweepGain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + sweepAttack)
    sweepGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + length - sweepRelease)
    
    osc.connect(sweepGain).connect(audioCtx.destination)
    osc.start()
    osc.stop(audioCtx.currentTime + length)
}

function playPulse () {
    const { pulseOsc1hz, pulseOsc2hz } = config

    const length = 1
    const pulseGain = audioCtx.createGain()
    pulseGain.gain.setValueAtTime(1, audioCtx.currentTime)

    const osc1 = audioCtx.createOscillator()
    osc1.type = 'sine'
    osc1.frequency.setValueAtTime(pulseOsc1hz, audioCtx.currentTime)

    const osc2 = audioCtx.createOscillator()
    osc2.type = 'square'
    osc2.frequency.setValueAtTime(pulseOsc2hz, audioCtx.currentTime)

    osc2.connect(pulseGain.gain)
    osc1.connect(pulseGain).connect(audioCtx.destination)
    osc2.start()
    osc1.start()
    osc1.stop(audioCtx.currentTime + length)
}

function playNoise () {
    const { noiseDuration, noiseFrequency } = config
    
    const bufferSize = audioCtx.sampleRate * noiseDuration
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate)

    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++)
        data[i] = Math.random() * 2 - 1

    const noise = audioCtx.createBufferSource()
    noise.buffer = buffer

    const filter = audioCtx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = noiseFrequency

    noise.connect(filter).connect(audioCtx.destination)
    noise.start()
}

function playSample () {
    const { sample, sampleSpeed } = config  
    const sampleSource = audioCtx.createBufferSource()
    sampleSource.buffer = sample
    sampleSource.playbackRate.setValueAtTime(sampleSpeed, audioCtx.currentTime)
    sampleSource.connect(audioCtx.destination)
    sampleSource.start()
}
