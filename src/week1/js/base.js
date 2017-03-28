class Base {

  constructor() {
    //nothing to do
  }

  onMouse(object, fn) {
    object.addEventListener("mousemove", fn);
  }

  onKeyDown(object, fn) {
    object.addEventListener("keydown", fn);
  }

}
export default Base;