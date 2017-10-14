const render = (() => {
  const xhttp = new XMLHttpRequest();
  const body  = document.querySelector("body");

  function requestListener() {
    body.innerHTML = this.response;
  }
  
  return template => {
    xhttp.addEventListener("load", requestListener);
    xhttp.open("GET", `templates/${template}.html`);
    xhttp.send();
  }
})();