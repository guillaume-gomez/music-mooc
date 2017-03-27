import Synth from './synth.js';

class App {
  constructor() {
    this.synth = new Synth();
    this.synth.start();
    this.connectToKeyBoard();
  }

  connectToMouse() {
    let element = document.getElementById("AppDiv");
    this.synth.onMouse(element);
  }

  connectToKeyBoard() {
    let element = document.getElementById("AppDiv");
    this.synth.onKeyDown(element);
  }

  changeFrequency(value) {
    this.synth.osc.frequency.value = value;
  }

  synth() {
    return this.synth;
  }
}

window.app = new App();