import Synth from './synth.js';

class App {
  constructor() {
    this.synth = new Synth();
    this.synth.start();

    let element = document.getElementById("AppDiv");
    element.setAttribute("tabIndex",1);
    this.synth.connectToKeyboard(element);
  }
}

window.app = new App();