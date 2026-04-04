// Typing effect
const text = "yesin.woow";
let i = 0;
const speed = 100;
const nameEl = document.getElementById("name");

function typing() {
  if (i < text.length) {
    nameEl.textContent += text.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}
typing();

// Particle background
tsParticles.load("tsparticles", {
  background: { color: "#0d1117" },
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    links: {
      enable: true,
      color: "#ffffff",
      distance: 150
    },
    move: {
      enable: true,
      speed: 2
    },
    size: { value: 3 },
    opacity: { value: 0.5 }
  }
});