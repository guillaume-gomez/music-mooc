import Synth from './synth.js';

class App {
  constructor() {
    this.synth = new Synth();
    this.start();
  }

  stop() {
    this.synth.stop();
  }

  start() {
    this.synth.start();
  }

  changeFrequency(value) {
    this.synth.osc.frequency.value = value;
  }
}

window.app = new App();