'use strict';

// Selecting Elements
const homeSection = document.querySelector('#home');
const aboutMeSection = document.querySelector('#about-me');
const projectSection = document.querySelector('#projects');
const contactMeSection = document.querySelector('#contact-me');
const header = document.querySelector('.top-container');

const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

// Smooth scrolling function
const smoothScrol = function (e) {
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};

// Page Navigation : Smooth Scrolling
navList.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav-link')) {
    smoothScrol(e);
  }
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav-link');
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky Navigation
// const navHeight = nav.getBoundingClientRect().height;
//
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };
//
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(header);
