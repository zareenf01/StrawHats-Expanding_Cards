"use strict";
let panels = document.querySelectorAll(".panel");
let active = document.querySelector(".active");
//active.classList.remove("active");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActive();
    panel.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
