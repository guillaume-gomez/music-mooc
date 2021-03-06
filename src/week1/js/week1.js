
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

  export function playSynth(object) {
    const fn = (event) => {
      let osc = con.createOscillator();
      let amp = con.createGain();
      let now =  con.currentTime;
      amp.gain.value = 0;
      amp.gain.linearRampToValueAtTime(0.1, now + 2);
      amp.gain.linearRampToValueAtTime(0, now + 4);
      osc.frequency.value = Math.random() * 500;
      osc.connect(amp);
      osc.type = 'sine'
      amp.connect(con.destination);
      osc.start();
      osc.stop(now + 4.1);
    }
    object.addEventListener("keydown", fn);
  }

  export function addFilter(object, osc) {
    let filter = con.createBiquadFilter();
    osc.connect(filter);
    filter.connect(con.destination);

    const fn = (event) => {
      filter.frequency.value = event.clientX * 10;
      filter.Q.value = event.clientY / 10;
    };
    object.addEventListener("keydown", fn);
  }

  export function LFO() {
    let osc = con.createOscillator();
    let lfo = con.createOscillator();
    let lfo_amp = con.createGain();

    lfo_amp.gain.value = 200;

    lfo.connect(lfo_amp);
    lfo_amp.connect(osc.frequency);
    osc.connect(con.destination);

    osc.frequency.value  = 300;
    lfo.frequency.value = 0.5;

    osc.start();
    lfo.start();
  }