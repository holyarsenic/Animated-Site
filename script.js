gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis(
  {
    duration: 1.2,
    smooth: true
  }
);
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



function navbar() {

  ScrollTrigger.create({
    trigger: ".page4",
    start: "bottom center",

    onEnter: () => {
      document.querySelector("nav").classList.add("nav-white");
    },

    onLeaveBack: () => {
      document.querySelector("nav").classList.remove("nav-white");
    }
  });
};

navbar();


function scrollingEffect() {
  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      gsap.to(".scroll", {
        x: "-=1000",
        duration: 7,
        repeat: -1,
        scrub: 2,
        ease: "none"
      });
    } else {
      gsap.to(".scroll", {
        x: "+=1000",
        duration: 7,
        repeat: -1,
        scrub: 2,
        ease: "none"
      });
    }
  });
}

function mobileScrolling() {
  window.addEventListener("touchmove", (dets) => {
    if (dets.touches[0].clientY < 0) {
      gsap.to(".scroll", {
        x: "-=1000",
        duration: 7,
        repeat: -1,
        ease: "none"
      });
    } else {
      gsap.to(".scroll", {
        x: "+=1000",
        duration: 7,
        repeat: -1,
        ease: "none"
      });
    }
  });
}

if (window.matchMedia("(max-width: 600px)").matches) {
  mobileScrolling();
} else {
  scrollingEffect();
}

const ntg = document.querySelector('.resp-nav .ntg');
const respnav = document.querySelector('.sec1 .resp-nav');
const respMenu = document.querySelector('.resp-menu');

let isOpen = false;

respnav.addEventListener('click', () => {

  if (isOpen === false) {
    ntg.style.opacity = '0';
    respMenu.classList.toggle('open');
    gsap.to(".first", {
      rotation: 45,
      y: 7,
      duration: 0.3
    });
    gsap.to(".second", {
      rotation: -45,
      y: -7,
      duration: 0.3
    });

    isOpen = true;
  } else {
    ntg.style.opacity = '1';
    respMenu.classList.toggle('open');
    gsap.to(".first", {
      rotation: 0,
      y: 0,
      duration: 0.3
    });
    gsap.to(".second", {
      rotation: 0,
      y: 0,
      duration: 0.3
    });

    isOpen = false;
  }
});