function createInitialPage() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("type", "button");
  homeBtn.classList.add("home-btn");
  homeBtn.innerText = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("type", "button");
  menuBtn.classList.add("menu-btn");
  menuBtn.innerText = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("type", "button");
  contactBtn.classList.add("contact-btn");
  contactBtn.innerText = "Contact";

  btnContainer.append(homeBtn, menuBtn, contactBtn);

  const main = document.createElement("div");
  main.classList.add("main");

  wrapper.append(btnContainer, main);
  return wrapper;
}

function createHomePage() {
  const home = document.createElement("div");
  home.innerText = "This is the Home Page";
  return home;
}

function createMenuPage() {
  const menu = document.createElement("div");
  menu.innerText = "This is the menu Page";
  return menu;
}

function createContactPage() {
  const contact = document.createElement("div");
  contact.innerText = "This is the contact Page";
  return contact;

}

export { createInitialPage, createHomePage, createMenuPage, createContactPage };
