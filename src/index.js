import {
  createProject,
  animationAppearanceElements,
} from '../src/modules/Utilities';

import { headerScroll } from './modules/Header';
import { sidebarMenu } from './modules/sidebar-menu';
import { dataProjects } from './modules/Data';

headerScroll();
sidebarMenu();

const projectsContainer = document.querySelector('.projects__wrapper');

animationAppearanceElements(projectsContainer, dataProjects, createProject);

////////////////slider//////////////////////////////

const sliderImages = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function showSlide() {
  sliderWidth = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
  sliderImages.forEach((item) => (item.style.width = sliderWidth + 'px'));
  rollSlider();
}
showSlide();

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }

  rollSlider();
  thisSlide(sliderCount);
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }
  rollSlider();
  thisSlide(sliderCount);
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove('active-dot'));
  sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});
