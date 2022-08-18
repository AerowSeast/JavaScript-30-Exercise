window.addEventListener('keydown', e => { 
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (audio == null) { return; }
  audio.currentTime = 0;
  audio.play();
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
})

const keys = document.querySelectorAll("div.key");

keys.forEach(key => { 
  key.addEventListener('transitionend',e => { 
    if (e.propertyName !== "transform") { return; }
    console.log(e);
    key.classList.remove("playing");
  })
})