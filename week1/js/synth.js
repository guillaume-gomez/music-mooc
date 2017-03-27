function synth() {
  let audioContext = window.AudioContext || window.webkitAudioContext;
  let con = new audioContext();
  let osc = con.createOscillator();
  osc.connect(con.destination);
  //osc.start();
}

synth();