class Synth {
  constructor() {
    let audioContext = window.AudioContext || window.webkitAudioContext;
    let con = new audioContext();
    this.osc = con.createOscillator();
    this.osc.connect(con.destination);
  }

  onMouse(object) {
    const fn = (event) => {
      this.osc.frequency.value = event.clientY;
    }
    object.addEventListener("mousemove", fn); 
  }

  start() {
    this.osc.start();
  }

  stop() {
    this.ocs.stop();
  }
}

export default Synth;