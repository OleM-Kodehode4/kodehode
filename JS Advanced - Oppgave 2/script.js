const movable = document.getElementById("movable");

let xPos = 100;
let yPos = 100;

movable.style.left = `${xPos}px`;
movable.style.top = `${yPos}px`;

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

document.addEventListener("keydown", (event) => {
  const step = 20;

  switch (event.key) {
    case "ArrowUp":
      if (yPos - step >= 0) yPos -= step;
      break;
    case "ArrowDown":
      if (yPos + step <= screenHeight - movable.offsetHeight) yPos += step;
      break;
    case "ArrowLeft":
      if (xPos - step >= 0) xPos -= step;
      break;
    case "ArrowRight":
      if (xPos + step <= screenWidth - movable.offsetWidth) xPos += step;
      break;
  }

  movable.style.left = `${xPos}px`;
  movable.style.top = `${yPos}px`;
});

document.addEventListener("click", (event) => {
  xPos = event.clientX - movable.offsetWidth / 2;
  yPos = event.clientY - movable.offsetHeight / 2;

  movable.style.left = `${xPos}px`;
  movable.style.top = `${yPos}px`;
});
