import "./main.css";
import { generateNav } from ".";
// import { clearPage } from ".";
// import { homePage } from "./home-page";

export const menuPage = function () {
  generateNav();
  // LEFT -------------------------------------------

  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  content.appendChild(leftSide);

  const menuLayout = document.createElement("div");
  menuLayout.classList.add("menu-layout");
  leftSide.appendChild(menuLayout);

  // TITLES

  const menuHeader = document.createElement("h4");
  menuHeader.classList.add("menu-header");
  menuLayout.appendChild(menuHeader);
  menuHeader.textContent = "Poseidon's Garden";

  const menuTitle = document.createElement("h4");
  menuTitle.classList.add("menu-title");
  menuLayout.appendChild(menuTitle);
  menuTitle.textContent = "Menu";

  // MENU ITEMS AND PRICES

  const menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("menu-item-container");
  menuLayout.appendChild(menuItemContainer);

  const menuItemRows = document.createElement("div");
  menuItemRows.classList.add("menu-item-rows");
  menuItemContainer.appendChild(menuItemRows);

  const menuItemPrices = document.createElement("div");
  menuItemPrices.classList.add("menu-item-prices");
  menuItemContainer.appendChild(menuItemPrices);

  // ITEM 1

  const menuItemList = [];
  const descriptionList = [];
  const priceList = [];

  for (let i = 0; i < 5; i++) {
    const menuItem = document.createElement("p");
    menuItem.classList.add("menu-item");
    menuItemRows.appendChild(menuItem);
    menuItemList.push(menuItem);

    const menuItemDescription = document.createElement("p");
    menuItemDescription.classList.add("menu-item-description");
    menuItemRows.appendChild(menuItemDescription);
    descriptionList.push(menuItemDescription);

    const priceMenuItem = document.createElement("h4");
    priceMenuItem.classList.add("pricing");
    menuItemPrices.appendChild(priceMenuItem);
    priceList.push(priceMenuItem);
  }

  menuItemList[0].textContent = "California Roll";
  descriptionList[0].textContent =
    "Delicious and fresh salmon wrapped rice and seaweed";
  priceList[0].textContent = "$ 7.00";

  menuItemList[1].textContent = "Tuna Avocado Roll";
  descriptionList[1].textContent =
    "The finest Japanese tuna perfectly enhanced by ethically sourced avocadoes";
  priceList[1].textContent = "$ 8.00";

  menuItemList[2].textContent = "Sushi and Sashimi Combo";
  descriptionList[2].textContent =
    "A mix of fresh cut fishies which are sure to get your mouth watering";
  priceList[2].textContent = "$ 22.00";

  menuItemList[3].textContent = "Udon";
  descriptionList[3].textContent =
    "Homemade udon noodles in a traditional Japanese broth, yummy";
  priceList[3].textContent = "$ 5.00";

  menuItemList[4].textContent = "Gingerbread Sake";
  descriptionList[4].textContent = "Sweet rice wine served warm";
  priceList[4].textContent = "$ 9.00";
};
// const menuItem1 = document.createElement("p");
// menuItem1.classList.add("menu-item");
// menuItemRows.appendChild(menuItem1);
// menuItem1.textContent = "California Roll";

// const menuItem1Description = document.createElement("p");
// menuItem1Description.classList.add("menu-item-description");
// menuItemRows.appendChild(menuItem1Description);
// menuItem1Description.textContent =
//   "Delicious and fresh salmon wrapped rice and seaweed";

//   const priceMenuItem1 = document.createElement("h4");
//   priceMenuItem1.classList.add("menu-item-description");
//   menuItemPrices.appendChild(priceMenuItem1);
//   priceMenuItem1.textContent = "$7";
// };
//   // RIGHT ------------------------------------------

//   const rightSide = document.createElement("div");
//   rightSide.classList.add("right-side");
//   content.appendChild(rightSide);

//   // NAV ---------------------------------------------

//   const nav = document.createElement("nav");
//   nav.classList.add("nav");
//   rightSide.appendChild(nav);

//   const home = document.createElement("h2");
//   home.classList.add("home");
//   nav.appendChild(home);
//   home.textContent = "Home";

//   home.addEventListener("click", function () {
//     clearPage();
//     homePage();
//   });

//   const menu = document.createElement("h2");
//   menu.classList.add("menu");
//   nav.appendChild(menu);
//   menu.textContent = "Menu";

//   const reservation = document.createElement("h2");
//   reservation.classList.add("reservation");
//   nav.appendChild(reservation);
//   reservation.textContent = "Reservation";
// };
