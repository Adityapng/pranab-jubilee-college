const cursorLeft = "/assets/elements/ImageCarausal/cursor/cursorPrev.svg";

const cursorRight = "/assets/elements/ImageCarausal/cursor/cursorNext.svg";

export function initializeCarousalEventListener() {
  const carousalContainer = document.getElementById("slider");

  if (carousalContainer) {
    carousalContainer.addEventListener("mousemove", (event) => {
      const rect = carousalContainer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const mid = (rect.right - rect.left) / 2;

      if (x < mid) {
        carousalContainer.style.cursor = `url(${cursorLeft}), auto`;
      } else {
        carousalContainer.style.cursor = `url(${cursorRight}), auto`;
      }
    });
  } else {
    console.error('Element with ID "slider" not found.');
  }
}
