import Synth from './synth.js';
import LFO from "./lfo.js";

class App {
  constructor() {
    this.synth = new Synth();
    this.lfo = new LFO();

    this.element = document.getElementById("AppDiv");
    this.element.setAttribute("tabIndex",1);
  }


  lfoExample() {
    this.lfo.start();
    this.lfo.connectToMouse(this.element);
  }

  usingEnvelopes() {
    this.synth.playSynth(this.element);
  }

  filteredSynth() {
    this.synth.osc.frequency.value = 600;
    this.synth.osc.type = "sawtooth";
    this.synth.addFilter(this.element);
    this.synth.connectToKeyboard(this.element)
    this.synth.start();
  }


}

window.app = new App();
window.app.filteredSynth();