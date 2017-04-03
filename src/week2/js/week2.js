const audio_context = window.AudioContext || window.webkitAudioContext;

export const con = new audio_context();

export function connectToMouse(object, osc) {
  const fn = (event) => {
    osc.frequency.value = event.clientY;
  }
  object.addEventListener("mousedown", fn);
}

export function connectToKeyboard(object, osc) {
  const fn = (event) => {
    switch(event.key) {
      case "z":
        osc.frequency.value = 261.63;
      break;
      case "x":
        osc.frequency.value = 293.66;
      break;
      case "c":
        osc.frequency.value = 329.63;
      break;
      case "v":
        osc.frequency.value = 349.23;
      break;
    }
  }
  object.addEventListener("keydown", fn);
}
