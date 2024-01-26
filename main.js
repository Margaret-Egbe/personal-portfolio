/*import "./styles/modern-normalize.css";
import "./styles/style.css";
import "./styles/components/header.css";
import "./styles/components/hero.css";
import "./styles/components/about.css";
import "./styles/components/featured.css";
import "./styles/components/contact.css";
import "./styles/components/mobile-nav.css";
import "./styles/utilis.css";*/


import mobileNav from "./utiliis/mobile-nav";
import darkMode from "./utiliis/dark-mode";
import lazyLoads from "./utiliis/lazy-loading";


mobileNav();
darkMode();
lazyLoads();

/**Typed Animation */
var typed = new Typed(".text", {
  strings: ["Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//portfolio see more
const btn1 = document.querySelector(".btn1");
let currentItems = 3;

btn1.addEventListener("click", (e) => {
  const elementList = [...document.querySelectorAll(".work-list .work")];
  e.target.classList.add("show-loader");

  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "flex";
    }
  }

  e.target.classList.remove("show-loader");
  currentItems += 3;

  if (currentItems >= elementList.length) {
    e.target.classList.add("loaded");
    e.target.style.display = "none";
  }
});
