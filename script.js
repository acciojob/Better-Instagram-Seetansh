const draggables = document.querySelectorAll(".draggable");
let dragged = null;

draggables.forEach(div => {
  div.addEventListener("dragstart", () => {
    dragged = div;
  });

  div.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  div.addEventListener("drop", () => {
    if (dragged && dragged !== div) {
      // Get computed background-image values
      const draggedBg = window.getComputedStyle(dragged).backgroundImage;
      const targetBg = window.getComputedStyle(div).backgroundImage;

      // Swap backgrounds
      dragged.style.backgroundImage = targetBg;
      div.style.backgroundImage = draggedBg;
    }
  });
});
