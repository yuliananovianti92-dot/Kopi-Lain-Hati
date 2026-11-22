document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  if (!hamburgerMenu || !navbarNav) {
    console.error("Hamburger atau navbar tidak ditemukan!");
    return;
  }

  // Klik tombol hamburger
  hamburgerMenu.addEventListener("click", function (e) {
    e.preventDefault();

    navbarNav.classList.toggle("active");
  });

  // Klik link menu
  navbarNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navbarNav.classList.remove("active");
    });
  });

  // Klik di luar menu
  document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
