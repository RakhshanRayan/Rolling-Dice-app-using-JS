var num;
var stopped = true;
var t;
var random = Math.floor(Math.random() * 100);
function change() {
  var random = Math.floor(Math.random() * 100);
  num.innerHTML = random;
}
function stopstart() {
  if (random % 2 == 1 && stopped == true) {
    stopped = false;
    t = setInterval(change, 100);
  } else {
    clearInterval(t);
    stopped = true;
  }
}
window.onload = function () {
  num = document.getElementById("num");
  stopstart();
};
