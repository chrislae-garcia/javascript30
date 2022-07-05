window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-code="${e.code}"]`);
  console.log(audio);
});