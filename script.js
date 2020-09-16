var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-GB';
recognition.interimResults = false;



recognition.onresult = function(event) {
    console.log(event)
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    console.log(command)
    if(command.toLowerCase() === 'move up'){
        pos-=step
        drawSquare()
    }
    else if (command.toLowerCase() === 'move down'){
        pos+=step
        drawSquare()
    }
    }
    







recognition.onspeechend = function() {
    recognition.stop();
};


function startRecognition(){
recognition.start();


}

let canvas=document.getElementById('canvas')
let ctx=canvas.getContext('2d');

var size=90
var step=40

var pos=canvas.height/2-size/2

// ctx.Fill();'


function drawSquare(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.beginPath();
ctx.fillRect(canvas.width/2, pos,size, size);

}


drawSquare()