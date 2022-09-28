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

export { createInitialPage };
