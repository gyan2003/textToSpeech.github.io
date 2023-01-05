const textArea=document.getElementById('textarea');
const speakButton=document.getElementById('btn');

speakButton.addEventListener('click',function(){
    const text=textArea.value;
    if(!text){
        alert('Please Enter some text');
        return;
    }
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    return;
});