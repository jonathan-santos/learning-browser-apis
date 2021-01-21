const buttonGravar = document.querySelector('#gravar')
let statusFala = document.querySelector('#status-fala')
let resultadoFala = document.querySelector('#resultado-fala')

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var words = [ 'oi' , 'olá' , 'como', 'você', 'vai', 'tudo', 'bem', 'jubiscreudo' ];
var grammar = '#JSGF V1.0; grammar words; public <word> = ' + words.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'pt-BR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

statusFala.innerText = 'Esperando você segurar o botão pra gravar'

buttonGravar.addEventListener('pointerdown', () => {
    recognition.start()
    statusFala.innerText = 'Te escutando, solte para parar de gravar'
})

buttonGravar.addEventListener('pointerup', () => {
    recognition.stop()
    statusFala.innerText = 'Terminado de gravar. Para gravar de novo segure o botão'
})

recognition.onresult = event => {
    const { transcript, confidence } = event.results[0][0]
    console.log(`transcript: ${transcript}`)
    console.log(`confidence: ${confidence}`)
    resultadoFala.innerText = `[Com ${confidence} de certeza] ${transcript}`
}

recognition.onnomatch = () => {
    resultadoFala.innerText = 'Não entendi o que você disse'
}
