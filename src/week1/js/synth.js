import Base from './base';

class Synth extends Base{
  constructor() {
    super();
    let audioContext = window.AudioContext || window.webkitAudioContext;
    let con = new audioContext();
    this.osc = con.createOscillator();
    this.osc.connect(con.destination);
  }

  connectToMouse(object) {
    const fn = (event) => {
      this.osc.frequency.value = event.clientY;
    }
    this.onMouse(object, fn)
  }

  connectToKeyboard(object) {
    const fn = (event) => {
      switch(event.key) {
        case "z":
          this.osc.frequency.value = 261.63;
        break;
        case "x":
          this.osc.frequency.value = 293.66;
        break;
        case "c":
          this.osc.frequency.value = 329.63;
        break;
        case "v":
          this.osc.frequency.value = 349.23;
        break;
      }
    }
    this.onKeyDown(object, fn);
  }

  start() {
    this.osc.start();
  }

  stop() {
    this.ocs.stop();
  }
}

export default Synth;