var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-GB';
recognition.interimResults = false;


var showText=document.getElementById("command")

recognition.onresult = function(event) {

    console.log(event)
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    showText.innerHTML=`Commad Recieved: ${command}`

    console.log(command)
    if(command.toLowerCase().includes("up")){
        posY-=step
        drawSquare()
    }
    else if (command.toLowerCase().includes("down")){
        posY+=step
        drawSquare()
    }
    }
    







recognition.onspeechend = function() {
    recognition.stop();
};


function startRecognition(){
 
    showText.innerHTML=''
recognition.start();


}

let canvas=document.getElementById('canvas')
let ctx=canvas.getContext('2d');

var size=90
var step=40
var posX=canvas.width/2-size/2

var posY=canvas.height/2-size/2


// ctx.Fill();'


function drawSquare(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.beginPath();
    ctx.fillStyle="red"
ctx.fillRect(posX, posY,size, size);

}


drawSquare()