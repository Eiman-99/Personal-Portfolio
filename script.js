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

// Media Query check for image source change
let myMediaQuery = window.matchMedia("(max-width: 840px)");
function widthChangeCallback(myMediaQuery) {
  const myPhoto = document.getElementById("my-photo");
  if (myMediaQuery.matches) {
    myPhoto.src = "img/photo-responsive.png";
  } else {
    myPhoto.src = "img/personal-photo.png";
  }
}

myMediaQuery.addEventListener("change", widthChangeCallback);
// Initial check
widthChangeCallback(myMediaQuery);

// Media Query check for layout change
let myMediaQuery2 = window.matchMedia("(max-width: 768px)");
function widthChangeCallback2(myMediaQuery2) {
  const flexContainer = document.querySelector(".flex-container");
  const col2 = document.querySelector(".col-2");

  if (myMediaQuery2.matches) {
    // Hide the second column
    col2.style.display = "none";

    // Add the image above the text and center it
    if (!document.querySelector(".personal-photo")) {
      const personalPhotoDiv = document.createElement("div");
      personalPhotoDiv.className = "personal-photo";
      personalPhotoDiv.innerHTML = `<img id="my-photo2" src="img/photo-responsive2.png" alt="">`;

      flexContainer.insertBefore(personalPhotoDiv, flexContainer.firstChild);
    }

    // Ensure the flex container is in column layout and centered
    flexContainer.style.flexDirection = "column";
    flexContainer.style.alignItems = "center";
  } else {
    // Restore the original layout
    col2.style.display = "block";

    const personalPhotoDiv = document.querySelector(".personal-photo");
    if (personalPhotoDiv) {
      personalPhotoDiv.remove();
    }

    flexContainer.style.flexDirection = "";
    flexContainer.style.alignItems = "";
  }
}

myMediaQuery2.addEventListener("change", widthChangeCallback2);
// Initial check
widthChangeCallback2(myMediaQuery2);
