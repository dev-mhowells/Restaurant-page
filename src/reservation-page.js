import "./main.css";
import { generateNav } from ".";

export const reservationPage = function () {
  generateNav();

  // LEFT -------------------------------------------

  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  content.appendChild(leftSide);

  const menuLayout = document.createElement("div");
  menuLayout.classList.add("menu-layout");
  leftSide.appendChild(menuLayout);

  // TITLES - USES MENU LAYOUT CSS CLASSES

  const menuHeader = document.createElement("h4");
  menuHeader.classList.add("menu-header");
  menuLayout.appendChild(menuHeader);
  menuHeader.textContent = "Poseidon's Garden";

  const reservationTitle = document.createElement("h4");
  reservationTitle.classList.add("menu-title");
  menuLayout.appendChild(reservationTitle);
  reservationTitle.textContent = "Contact";

  // Contact

  const contactInformation = document.createElement("p");
  contactInformation.classList.add("contact-info");
  menuLayout.appendChild(contactInformation);
  contactInformation.innerHTML = `Posiedon's Garden <br> Spencer Road <br> London <br> EL5 6NE`;
};
