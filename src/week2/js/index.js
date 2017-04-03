class App {
  constructor() {

    this.element = document.getElementById("AppDiv");
    this.element.setAttribute("tabIndex",1);
  }

}

window.app = new App();