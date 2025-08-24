function loadinganimation(){
  var count = 0;
counter = document.querySelector("#counter");
var timer = setInterval(() => {
  count++;
  counter.textContent = count;
  if (count == 100) {
    clearInterval(timer);
  }
}, 30);

var tl = gsap.timeline();
tl.from(".line h1", {
  y: 200,
  stagger: 0.25,
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
});
gsap.from(".line-part1", {
  opacity: 0,
  delay: 0.8,
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.5,
  delay: 2.5,
});
tl.from("#page1", {
  y: 1200,
  opacity: 0,
});
tl.to("#loader", {
  display: "none",
});

tl.from(".hero h1, .hero h2",{
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2
})
tl.from("#navbar",{
  y: -100,
  opacity: 0,
  duration: 0.5
})
}



loadinganimation();

function cursoranimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
}
cursoranimation();


