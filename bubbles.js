/* BUBBLES */
const bubbleContainer = document.querySelector(".bubbles");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 40 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 6 + 6}s`;

  bubbleContainer.appendChild(bubble);
  setTimeout(() => bubble.remove(), 12000);
}

setInterval(createBubble, 600);

/* SOAP FLIP */
document.querySelectorAll(".soap-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

  const bubbleLayer = document.querySelector(".bubbles");

  document.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.7) return; // controls density

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 18 + 8;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${e.clientX}px`;
    bubble.style.top = `${e.clientY}px`;
    bubble.style.animationDuration = `${Math.random() * 4 + 4}s`;

    bubbleLayer.appendChild(bubble);

    setTimeout(() => bubble.remove(), 6000);
  });

