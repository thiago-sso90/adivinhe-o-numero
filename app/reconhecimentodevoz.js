const elementochute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang= 'pt-br'
recognition.start()


recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibechutenatela(chute)
    vericaseevalido(chute)
    chuteinvalido(chute)
}
function exibechutenatela(chute){
    elementochute.innerHTML = `
    <div>Voçe disse</div>
    <span class="box">${chute}<span>
    `
}
recognition.addEventListener('end',() => recognition.start())
