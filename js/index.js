// typing effect
const text = "Yesin Arafat";
let i = 0;
const el = document.getElementById("name");

function type() {
  if (i < text.length) {
    el.textContent += text[i];
    i++;
    setTimeout(type, 120);
  }
}
type();