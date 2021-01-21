const buttonFalar = document.querySelector('#falar')
const inputText = document.querySelector('#texto')

var synth = window.speechSynthesis
var selectedVoice

function getSelectedVoice() {
    synth.getVoices().forEach(voice => {
        if (voice.name.includes('Brasil'))
            selectedVoice = voice
    })
}

getSelectedVoice()
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getSelectedVoice;
}

buttonFalar.addEventListener('click', () => {
    if (!inputText.value)
        return

    var textToSpeech = new SpeechSynthesisUtterance(inputText.value);
    textToSpeech.voice = selectedVoice
    textToSpeech.pitch = 1
    textToSpeech.rate = 1
    synth.speak(textToSpeech)
})
