function onCanvasFormSubmit(e) {
  const width  = document.querySelector("#width-input").value;
  const height = document.querySelector("#height-input").value;

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
  const ctx = canvas.getContext("2d");

  canvas.setAttribute("width", w.toString());
  canvas.setAttribute("height", h.toString());
  canvas.style = "border: 1px solid #000";

  ctx.fillStyle = 'blue';
  ctx.fillRect(30, 60, 400, 300);
}

function renderCanvasForm() {
  render("canvas-form")
    .then(() => {
      document
        .querySelector("form")
        .addEventListener("submit", onCanvasFormSubmit);
    })
    .catch(renderError);
}

renderCanvasForm();