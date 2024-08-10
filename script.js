var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#bottom",
    //  markers:true,
    start: "230% 30%",
    end: "350% 30%",
    scrub: 2,
   //  pin: true,
  },
});
// tl.to(
//   "#center",
//   {
//     height: "100vh",
//   },
//   "a"
// )
//   .to(
//     "#top",
//     {
//       top: "-50%",
//     },
//     "a"
//   )
//   .to(
//     "#bottom",
//     {
//       bottom: "-50%",
//     },
//     "a"
//   )
   //   .to(
   //     "#top-h1",
   //     {
   //       top: "50%",
   //     },
   //     "a"
   //   )
//   .to(
//     "#bottom-h1",
//     {
//       bottom: "-20%",
//     },
//     "a"
//   )
//   .to(
//     "#center-h1",
//     {
//       top: "-30%",
//     },
//     "a"
//   )
//   .to(".content", {
//     delay: -0.5,
//     marginTop: "0%",
//   });

gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers:true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});

function breakText() {
  var h2 = document.querySelector("#text");
  var h2Text = h2.textContent;

  var split = h2Text.split("");
  var clutter = "";

  split.forEach(function (e) {
    clutter = clutter + `<span>${e}</span>`;
  });

  console.log(clutter);

  h2.innerHTML = clutter;
}

breakText();

gsap.from("#ghe", {
   x: 80,
   duration: 0.9,
   delay: 0.4,
   opacity: 0,
   stagger: 0.15,
 });
 
gsap.from("#text span", {
  y: 70,
  duration: 0.9,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});



gsap.from("#logo1 #one", {
  x: -60,
  duration: 0.8,
  delay: 0.1,
  opacity: 0,
  stagger: 0.1,
});
gsap.from("#logo1 #two", {
  x: 60,
  duration: 0.8,
  delay: 0.2,
  opacity: 0,
  stagger: 0.3,
});
gsap.from("#logo1 #three", {
  x: -60,
  size:2,
  duration: 0.8,
  delay: 0.3,
  opacity: 0,
  stagger: 0.3,
});

gsap.registerPlugin(ScrollTrigger);

var t2 = gsap.timeline({
   scrollTrigger: {
     trigger: "#p",
    //  markers: true,
     start: "75% 50%",  // Start when #p is 100% in the viewport and 50% from the top
     end: "100% 50%",    // End at the same point (only animation between these points will happen)
     scrub: 5,           // Smoothly scrubs the animation to the scroll position
   },
 });
 
 // Animation for #a (left to right and bottom to top)
 t2.from("#a", {
   x: -60,
  //  y: 60,          // Adding vertical movement (bottom to top)
   duration: 1,    // Duration can be kept as a reference, but scrub will control the animation timing
   opacity: 0,
   stagger: 1,
   
 });
 
 // Animation for #b (right to left and bottom to top)
//  t2.from("#b", {
//    x: 60,          // Moving in the opposite direction compared to #a (right to left)
//    y: 60,          // Adding vertical movement (bottom to top)
//    duration: 1,    // Duration can be kept as a reference, but scrub will control the animation timing
//    opacity: 0,
//    stagger:1,
//    delay:1,
//  });
 


// grid

const images = [
  './assets/p1.jpg',
  './assets/p2.jpg',
  './assets/p3.jpg',
  './assets/p4.jpg',
  './assets/p5.jpg',
  './assets/p6.jpg',
  // './assets/12.jpg',
  './assets/p8.jpg',
  './assets/p9.jpg',
  './assets/p10.jpg',
  './assets/p14.jpg',
  
];

const photoContainer = document.querySelector('#photos .columns-2');

images.forEach((imageUrl, idx) => {
  const img1 = document.createElement('img');
  img1.src = imageUrl;
  img1.alt = `Your photo ${idx + 1}`;
  img1.classList.add('mb-4', 'size-full', 'rounded-lg', 'object-contain');
  
  photoContainer.appendChild(img1);
});

