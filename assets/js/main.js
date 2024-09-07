/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const menuOverlay = document.querySelector("#side-menu-overlay");
const sideMenu = document.querySelector("#side-menu");
const btnMenu = document.querySelector(".btn-menu");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

/*=============== OPEN / CLOSE SLIDE MENU ===============*/
function switchSlideMenu() {
  let width = sideMenu.style.width;

  let sideMenuWidth = "250px";

  if (width == sideMenuWidth) {
    closeSlideMenu();
  } else {
    openSlideMenu();
  }

  sideMenu.style.width = width;
}

function closeSlideMenu() {
  sideMenu.style.width = "0";
  menuOverlay.style.display = "none";
}

function openSlideMenu() {
  sideMenu.style.width = "250px";
  menuOverlay.style.display = "block";
}

/*=============== For swip event ===============*/
var hammertime = new Hammer(document);
hammertime.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });

/* Assign Events to elements */
function initEvents() {
  window.addEventListener("scroll", scrollActive);
  window.addEventListener("scroll", scrollHeader);

  btnMenu.addEventListener("click", openSlideMenu);
  menuOverlay.addEventListener("click", closeSlideMenu);

  hammertime.on("swipe", function (event) {
    if (event.direction == Hammer.DIRECTION_LEFT) {
      closeSlideMenu();
    } else {
      openSlideMenu();
    }
  });
}

initEvents();
