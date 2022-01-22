let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let countDown = 0;
console.log(saveEl);
console.log(countEl);

function increment() {
  countDown += 1;
  countEl.textContent = countDown;
  console.log(countDown);
}
function save() {
  let countStr = countDown + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  countDown = 0;
  console.log(countDown);
}
