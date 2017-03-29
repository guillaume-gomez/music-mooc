class Base {

  constructor() {
    //nothing to do
    let audioContext = window.AudioContext || window.webkitAudioContext;
    this.con = new audioContext();
  }

  onMouse(object, fn) {
    object.addEventListener("mousemove", fn);
  }

  onKeyDown(object, fn) {
    object.addEventListener("keydown", fn);
  }

}
export default Base;