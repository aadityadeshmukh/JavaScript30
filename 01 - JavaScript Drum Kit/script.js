
function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;
    audio.CurrentTime = 0;
    audio.play();

    const playDiv = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!playDiv) return;
    playDiv.classList.add('playing');
})