
// Initialize Lenis
const lenis = new Lenis(
  {
    duration: 1.2,
    smooth: true
  }
);

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
