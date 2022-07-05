window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-code="${e.code}"]`);
  if(!audio) return; // stops the function from running further
  audio.currentTime = 0;
  audio.play();
  console.log(audio);
});