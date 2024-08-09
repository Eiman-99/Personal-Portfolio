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

document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.getElementById("contact-link");
  const appIcons = document.querySelectorAll(".app-icon");

  contactLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default action of the link

    // Add the enlarged class to all icons
    appIcons.forEach((icon) => icon.classList.add("enlarged"));

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });

    // Remove the enlarged class after 1 second (or any desired time)
    setTimeout(() => {
      appIcons.forEach((icon) => icon.classList.remove("enlarged"));
    }, 1000); // 1000ms = 1 second
  });
});
