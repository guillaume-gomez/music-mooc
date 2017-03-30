import Base from './base';

class LFO extends Base{
  constructor() {
    super();
    this.osc = this.con.createOscillator();
    let lfo = this.con.createOscillator();
    let lfo_amp = this.con.createGain();

    lfo_amp.gain.value = 200;

    lfo.connect(lfo_amp);
    lfo_amp.connect(this.osc.frequency);
    this.osc.connect(this.con.destination);

    this.osc.frequency.value  = 300;
    lfo.frequency.value = 0.5;

    lfo.start();
  }

  connectToMouse(object) {
    const fn = (event) => {
      this.osc.frequency.value = event.clientX;
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

export default LFO;