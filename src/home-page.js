import "./main.css";
import { generateNav } from ".";
// import { clearPage } from ".";

// HOMAPAGE FUNCTION -------------------------------

export const homePage = function () {
  // LEFT -------------------------------------------

  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  content.appendChild(leftSide);

  const description = document.createElement("p");
  description.classList.add("description");
  leftSide.appendChild(description);
  description.textContent =
    "With an emphasis on quality ingredients, we source and prepare sushi fit for Poseidon himself. With fish plucked from his garden and on to your plate within hours, we guarantee an unforgettable dining experience.";

  // RIGHT ------------------------------------------

  const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  content.appendChild(rightSide);

  //   // NAV ---------------------------------------------

  generateNav();

  //   const nav = document.createElement("nav");
  //   nav.classList.add("nav");
  //   rightSide.appendChild(nav);

  //   const home = document.createElement("h2");
  //   home.classList.add("home");
  //   nav.appendChild(home);
  //   home.textContent = "Home";

  //   const menu = document.createElement("h2");
  //   menu.classList.add("menu");
  //   nav.appendChild(menu);
  //   menu.textContent = "Menu";

  //   const reservation = document.createElement("h2");
  //   reservation.classList.add("reservation");
  //   nav.appendChild(reservation);
  //   reservation.textContent = "Reservation";

  // HEADER ---------------------------------------

  const header = document.createElement("div");
  header.classList.add("header");
  rightSide.appendChild(header);

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  header.appendChild(restaurantName);
  restaurantName.textContent = "Poseidon's Garden";
};
