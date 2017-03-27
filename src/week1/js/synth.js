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

  onKeyDown(object) {
    const fn = (event) => {
      console.log(event)
      switch(event.key) {
        case "z":
          console.log("z")
          this.osc.frequency.value = 261.63;
        break;
        case "x":
          console.log("z")
          this.osc.frequency.value = 293.66;
        break;
        case "c":
          console.log("z")
          this.osc.frequency.value = 329.63;
        break;
        case "v":
          console.log("z")
          this.osc.frequency.value = 349.23;
        break;
      }
    }
    object.addEventListener("keydown", fn);
  }

  start() {
    this.osc.start();
  }

  stop() {
    this.ocs.stop();
  }
}

export default Synth;