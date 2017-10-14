const ajax = new XMLHttpRequest();

ajax.addEventListener("load", requestListener);

function requestListener() {
  console.log(this.responseText);
}