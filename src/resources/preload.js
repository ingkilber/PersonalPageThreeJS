export let preloadDivs = document.getElementsByClassName("preload");
export let preloadOpacity = document.getElementsByClassName("preload-overlay");
export let postloadDivs = document.getElementsByClassName("postload");
export let startScreenDivs = document.getElementsByClassName("start-screen");
export let startButton = document.getElementById("start-button");
export let fadeOutDivs = document.getElementsByClassName("fadeOutDiv");

export function noWebGL() {
  for (let i = 0; i < preloadDivs.length; i++) {
    preloadDivs[i].style.visibility = "hidden"; // or
    preloadDivs[i].style.display = "none";
  }
  for (let i = 0; i < postloadDivs.length; i++) {
    // or
    postloadDivs[i].style.display = "none";
  }
  for (let i = 0; i < preloadOpacity.length; i++) {
    // or
    preloadOpacity[i].style.display = "none";
  }
  //document.getElementById("preload-overlay").style.display = "none";
  var warning = WEBGL.getWebGLErrorMessage();
  var a = document.createElement("a");
  var linkText = document.createTextNode("Haga clic aquí para visitar mi sitio estático");
  a.appendChild(linkText);
  a.title = "Sitio Estático";
  a.href = "https://kilber.ymrest.com/";
  a.style.margin = "0px auto";
  a.style.textAlign = "center";
  document.getElementById("WEBGLcontainer").appendChild(warning);
  document.getElementById("WEBGLcontainer").appendChild(a);
}
