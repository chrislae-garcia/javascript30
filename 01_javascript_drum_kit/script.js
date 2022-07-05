function playSound(e) {
  const audio = document.querySelector(`audio[data-code="${e.code}"]`);
  const key = document.querySelector(`.key[data-code="${e.code}"]`);
  
  if(!audio) return; // stops the function from running further
  audio.currentTime = 0;
  audio.play();
  
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName != 'transform') return; // skip it if it is not a transform
  this.classList.remove('playing');
}

const key = document.querySelectorAll('.key');
key.forEach(key => key.addEventListener('transitionend', removeTransition));
  
window.addEventListener('keydown', playSound);