let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  console.log("Button clicked");
  count += 1;
  countEl.textContent = count;
}
function decrement() {
  console.log("Button clicked");
  count -= 1;
  countEl.textContent = count;
}

function save() {
  console.log("clicked");
  let countStr = count + "  - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
}
function reset() {
  console.log("Button clicked");
  count = 0;
  countEl.textContent = count;
}

console.log("Let's count people on the subway!");
