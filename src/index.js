import {
  createElement,
  addElementsLadder,
  animationAppearanceElements,
  addElementsWithoutLadder,
} from '../src/modules/Utilities';

import { headerScroll } from './modules/Header';
import { sidebarMenu } from './modules/sidebar-menu';

const dataProjects = [
  {
    imageUrl: './src/img/icons/monitor.svg',
    title: 'Проект 1',
    description: 'Текст описывающий проект 1',
    deployUrl: '',
  },
  {
    imageUrl: './src/img/icons/monitor.svg',
    title: 'Проект 2',
    description: 'Текст описывающий проект 2',
    deployUrl: '',
  },
  {
    imageUrl: './src/img/icons/monitor.svg',
    title: 'Проект 3',
    description: 'Текст описывающий проект 3',
    deployUrl: '',
  },

  {
    imageUrl: './src/img/icons/monitor.svg',
    title: 'Проект 4',
    description: 'Текст описывающий проект 4',
    deployUrl: '',
  },
  {
    imageUrl: './src/img/icons/monitor.svg',
    title: 'Проект 5',
    description: 'Текст описывающий проект 5',
    deployUrl: '',
  },
  {
    imageUrl: './src/img/icons/monitor.svg',
    title: 'Проект 6',
    description: 'Текст описывающий проект 6',
    deployUrl: '',
  },
];

headerScroll();
sidebarMenu();

function createProject(options, isMobile = false) {
  const {
    imageUrl = '',
    title = '',
    description = '',
    deployUrl = '',
  } = options;

  const projectWrapper = createElement({
    tag: 'article',
    classes: ['project'],
  });

  const projectImage = createElement({
    tag: 'img',
    classes: ['project__image'],
  });
  projectImage.setAttribute('src', imageUrl);
  projectImage.setAttribute('alt', 'project image');

  const projectTitle = createElement({
    tag: 'h4',
    classes: ['project__title'],
    text: title,
  });

  const projectText = createElement({
    tag: 'p',
    classes: ['project__text'],
    text: description,
  });

  let buttonWrapper;

  if (isMobile) {
    buttonWrapper = createElement({
      classes: ['project__button-wrapper'],
    });
  } else {
    buttonWrapper = createElement({
      classes: ['project__button-wrapper', 'project__button_disabled_true'],
    });
  }

  const projectButton = createElement({
    tag: 'button',
    text: 'Cмотреть деплой',
    classes: ['button', 'project__button'],
  });

  const projectButtonLink = createElement({
    tag: 'a',
  });
  projectButtonLink.setAttribute('href', deployUrl);
  projectButtonLink.setAttribute('target', '_blank');
  projectButtonLink.append(projectButton);
  buttonWrapper.append(projectButtonLink);

  projectWrapper.append(projectImage, projectTitle, projectText, buttonWrapper);

  if (!isMobile) {
    projectWrapper.addEventListener('mouseenter', (e) => {
      buttonWrapper.classList.remove('project__button_disabled_true');
    });

    projectWrapper.addEventListener('mouseleave', () => {
      buttonWrapper.classList.add('project__button_disabled_true');
    });
  }
  return projectWrapper;
}

const projectsContainer = document.querySelector('.projects__wrapper');
const elementsToWatch = projectsContainer.children;

const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleScreenChange(e) {
  if (e.matches) {
    addElementsLadder(projectsContainer, dataProjects, createProject);
  } else {
    addElementsWithoutLadder(projectsContainer, dataProjects, createProject);
  }
  animationAppearanceElements(elementsToWatch);
}

handleScreenChange(mediaQuery);
mediaQuery.addEventListener('change', handleScreenChange);

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
