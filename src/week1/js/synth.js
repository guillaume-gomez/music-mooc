import Base from './base';

class Synth extends Base{
  constructor() {
    super();
    this.osc = this.con.createOscillator();
  }

  connect(destination) {
    this.osc.connect(destination);
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

  addFilter(object) {
    let filter = this.con.createBiquadFilter();
    this.connect(filter);
    filter.connect(this.con.destination);

    const fn = (event) => {
      filter.frequency.value = event.clientX * 10;
      filter.Q.value = event.clientY / 10;
    };
    this.onMouse(object, fn);
  }

  // using enveloppes version
  playSynth(object) {
    const fn = (event) => {
      let osc = this.con.createOscillator();
      let amp = this.con.createGain();
      let now =  this.con.currentTime;
      amp.gain.value = 0;
      amp.gain.linearRampToValueAtTime(0.1, now + 2);
      amp.gain.linearRampToValueAtTime(0, now + 4);
      this.osc.frequency.value = Math.random() * 500;
      this.connect(amp);
      this.osc.type = 'sine'
      amp.connect(this.con.destination);
      this.osc.start();
      this.osc.stop(now + 4.1);
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