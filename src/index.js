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
