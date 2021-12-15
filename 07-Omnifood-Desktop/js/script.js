"use strict";

// setting the current year
let year = document.querySelector(".year");
let currentYear = new Date().getFullYear();
year.textContent = currentYear;

year.style.color = "inherit";
year.style.fontWeight = "inherit";

/// Implementing the menu
let menuButton = document.querySelector(".btn-mobile-nav");
let mainNavigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", function () {
  mainNavigation.classList.toggle("nav-open");
  menuButton.classList.toggle("nav-open");
});

// implementing the smooth scrolling

const allLinks = document.querySelectorAll("a:link");

console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      let element = document.querySelector(href);
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      mainNavigation.classList.toggle("nav-open");
      menuButton.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
