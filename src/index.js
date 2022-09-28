import {
  createInitialPage,
  createHomePage,
  createMenuPage,
  createContactPage,
} from "./pages.js";

document.querySelector("#content").append(createInitialPage());

function wipeMain() {
  document.querySelector(".main").innerHTML = "";
}

document.querySelector(".home-btn").addEventListener("click", () => {
  wipeMain();
  document.querySelector(".main").append(createHomePage());
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  wipeMain();
  document.querySelector(".main").append(createMenuPage());
});

document.querySelector(".contact-btn").addEventListener("click", () => {
  wipeMain();
  document.querySelector(".main").append(createContactPage());
});
