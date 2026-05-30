gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content", {
  opacity: 0,
  y: 100,
  duration: 1.5
});

gsap.utils.toArray(".reveal").forEach((section) => {

  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },

    opacity: 1,
    y: 0,
    duration: 1.4
  });

});

// NAVBAR BACKGROUND CHANGE

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.85)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.2)";
  }

});

// SMOOTH SCROLL FOR LINKS

document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});

// LOADER ANIMATION

window.addEventListener("load", () => {

  const tl = gsap.timeline();

  tl.to(".loader-logo", {
    opacity:1,
    y:0,
    duration:1.2,
    ease:"power3.out"
  })

  .to(".loader-line", {
    width:"220px",
    duration:1,
    ease:"power3.out"
  }, "-=0.6")

  .to(".loader-text", {
    opacity:1,
    y:0,
    duration:1,
    ease:"power3.out"
  }, "-=0.6")

  .to(".loader", {
    opacity:0,
    duration:1.2,
    delay:0.7,
    ease:"power2.inOut"
  })

  .set(".loader", {
    display:"none"
  });

});

// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {

  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.4,
    ease: "power3.out"
  });

  gsap.to(cursorDot, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1
  });

});

// CURSOR HOVER EFFECTS

const hoverElements = document.querySelectorAll(
  "a, button, .card, .luxury-card, .gallery-card"
);

hoverElements.forEach((element) => {

  element.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });

});

// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {

  menuToggle.classList.toggle("active");

  mobileMenu.classList.toggle("active");

});

// CLOSE MENU WHEN LINK CLICKED

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    menuToggle.classList.remove("active");

  });

});