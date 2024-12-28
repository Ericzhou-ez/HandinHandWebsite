'use strict';

const section1 = document.querySelector('.about-container');
const navBar = document.querySelector('.nav-bar');
const btnTop = document.querySelector('.btn-top');
const home = document.querySelector('.gradient-bg');

const observerCallBackNav = function(entries, obs) {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         navBar.style.backgroundColor = '';
         btnTop.classList.remove('hidden');
      }
   });
}

btnTop.addEventListener('click', function(e) {
   e.preventDefault();

   home.scrollIntoView({behavior: "smooth"});
})

const observerNav = new IntersectionObserver(
   observerCallBackNav, {root: null, threshold: 0.16}
);
observerNav.observe(section1);

document.addEventListener("DOMContentLoaded", function () {
   const track = document.querySelector(".sponsor-track");
   track.innerHTML += track.innerHTML;

   let position = 0;
   const scrollSpeed = 0.45;

   function animate() {
      position -= scrollSpeed;

      if (Math.abs(position) >= track.scrollWidth / 2) {
         position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
   }

   animate();
});

