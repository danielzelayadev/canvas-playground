const render = template => 
  new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", () => {
      document.body.innerHTML = xhttp.responseText;
      resolve();
    });

    xhttp.addEventListener("error", reject);

    xhttp.open("GET", `templates/${template}.html`);
    xhttp.send();
  });

function renderError(template) {
  alert(`Could not load template: '${template}'`);
}