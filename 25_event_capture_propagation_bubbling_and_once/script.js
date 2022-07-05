const divs = document.querySelectorAll('div');
const button  = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stops bubbling
}

// document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // captures or 'bubbling' from top-down
  once: true
}));

button.addEventListener('click', () => {
  console.log('Click!');
}, {
  once: true
});