// Navigation effect
const navBtns = document.querySelectorAll(".navBtn");
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((link) => {
      link.classList.remove("current");
    });
    btn.classList.add("current");
  });
});

// Change navbar background on scrolling
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("main-nav");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

// Function to check if an element is in viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
  var aboutSection = document.getElementById("about");

  if (isElementInViewport(aboutSection)) {
    // Add animation classes when about section is scrolled into view
    aboutSection.classList.add("animated");
  }
}

// Event listener for scroll events
window.addEventListener("scroll", handleScroll);

// Initial check in case the section is already in view on page load
handleScroll();
