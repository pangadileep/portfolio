let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



ScrollReveal({ 
  reset: true,
  distance:'80px',
  duration:2000,
  delay:200
 });

 ScrollReveal().reveal('.about-content', { origin:top });
 ScrollReveal().reveal('.about-img img', { origin:bottom });



 const typed = new typed('.multiple-text', {
     strings: ['Frontend Developer', 'Frontend', 'Frontend'],
     typeSpeed: 100,
     backSpeed: 100,
     backDelay: 1000,
     loop: true
     
 });