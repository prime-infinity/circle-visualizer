const circleContainer = document.getElementById("circle");
const numberOfDots = 150;
const radius = 140;

for (let i = 0; i < numberOfDots; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  // Calculate the angle for each dot
  const angle = (i / numberOfDots) * (2 * Math.PI);

  // Use trigonometry to position each dot on the circle
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  // Set the position of each dot
  dot.style.transform = `translate(${x + radius}px, ${y + radius}px)`;

  circleContainer.appendChild(dot);
}
