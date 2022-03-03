import { homePage } from "./home-page";
import { menuPage } from "./menu";
import { reservationPage } from "./reservation-page";

// CLEAR -----------------------------------------

export const clearPage = function () {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

const content = document.getElementById("content");

// RIGHT ------------------------------------------

// const rightSide = document.createElement("div");
// rightSide.classList.add("right-side");
// content.appendChild(rightSide);

// NAV ---------------------------------------------

export const generateNav = function () {
  const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  content.appendChild(rightSide);

  const nav = document.createElement("nav");
  nav.classList.add("nav");
  rightSide.appendChild(nav);

  const home = document.createElement("h2");
  home.classList.add("home");
  nav.appendChild(home);
  home.textContent = "Home";

  home.addEventListener("click", function () {
    clearPage();
    homePage();
  });

  const menu = document.createElement("h2");
  menu.classList.add("menu");
  nav.appendChild(menu);
  menu.textContent = "Menu";

  menu.addEventListener("click", function () {
    clearPage();
    menuPage();
  });

  const reservation = document.createElement("h2");
  reservation.classList.add("reservation");
  nav.appendChild(reservation);
  reservation.textContent = "Reservation";

  reservation.addEventListener("click", function () {
    clearPage();
    reservationPage();
  });
};

// menuPage();
// generateNav();
homePage();
// generateNav();
