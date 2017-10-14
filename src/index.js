function onCanvasFormSubmit(e) {
  const width  = Number(document.querySelector("#width-input").nodeValue);
  const height = Number(document.querySelector("#height-input").nodeValue);

  e.preventDefault();

  if (width < 0 || height < 0)
    alert("Width and height must be >= 0! >:(");
  else
    render("main")
      .then(() => setupCanvas(width, height))
      .catch(renderError);
}

function setupCanvas(w = 0, h = 0) {
  const canvas = document.querySelector("canvas");

  canvas.setAttribute("width", w.toString());
  canvas.setAttribute("height", h.toString());
}

render("canvas-form")
  .then(() => {
    document
      .querySelector("form")
      .addEventListener("submit", onCanvasFormSubmit);
  })
  .catch(renderError);