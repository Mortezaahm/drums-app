function playSound(e) {
  let keyCode;

  if (e.type === "keydown") {
    keyCode = e.keyCode;
  }

  if (e.type === "click") {
    keyCode = e.currentTarget.getAttribute("data-key");
  }

  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return; // Stop the function if no audio is found
  key.classList.add("playing");
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("click", playSound));
