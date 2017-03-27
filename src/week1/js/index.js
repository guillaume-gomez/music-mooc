import Synth from './synth.js';

class App {
  constructor() {
    this.synth = new Synth();
    this.synth.start();
    this.connectToMouse();
  }

  connectToMouse() {
    let element = document.getElementById("AppDiv");
    this.synth.onMouse(element);
  }

  changeFrequency(value) {
    this.synth.osc.frequency.value = value;
  }

  synth() {
    return this.synth;
  }
}

window.app = new App();