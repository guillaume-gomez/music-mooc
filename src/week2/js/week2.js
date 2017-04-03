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

export function connnectToUi() {
  let osc = con.createOscillator();
  osc.connect(con.destination);
  osc.start();

  const midiToFreq = (midiValue) => {
    const midiToFreq = {
      60: 261.63,
      61: 277.18,
      62: 293.66,
      63: 311.13
    };
    if(!midiToFreq[midiValue]) {
      return midiToFreq[60];
    }
    return midiToFreq[midiValue]
  }

  const keyboardChanged = (data) => {
    osc.frequency.value = midiToFreq(data.note);
  }

  const slider1Changed = (data) => {
    osc.frequency.value = data.value;
  }
  //on page loaded
  nx.onload = () => {
    nx.widgets.slider1.on('*', slider1Changed);
    nx.widgets.keyboard1.on('*', keyboardChanged);
  };
}

export connectTilt() {
  let osc = con.createOscillator();
  osc.connect(con.destination);
  osc.start();

  const tiltChanged = (data) => {
    osc.frequency.value = data.x * 500;
  };

  nx.onload = () => {
    nx.widgets.tilt.on("*", tiltChanged);
  }
}
