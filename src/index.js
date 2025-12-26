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

function createElement(options) {
  const { tag = 'div', text = '', classes = [] } = options;
  const element = document.createElement(tag);
  element.textContent = text;

  if (classes.length > 0) {
    element.classList.add(...classes);
  }

  return element;
}

function createProject(options) {
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

  const buttonWrapper = createElement({
    classes: ['project__button-wrapper', 'project__button_disabled_true'],
  });

  const projectButton = createElement({
    tag: 'button',
    text: 'Посмотреть деплой',
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
  projectWrapper.addEventListener('mouseenter', (e) => {
    buttonWrapper.classList.remove('project__button_disabled_true');
  });

  projectWrapper.addEventListener('mouseleave', () => {
    buttonWrapper.classList.add('project__button_disabled_true');
  });

  return projectWrapper;
}

function addElementsLadder(parent, dataElement) {
  let countElements = 3;
  let counterMultiplier = 3;

  dataElement.forEach((element) => {
    const htmlElement = createProject(element);
    htmlElement.style.marginTop = `${
      37 * (countElements - counterMultiplier)
    }px`;
    counterMultiplier--;
    if (counterMultiplier === 0) {
      countElements = 3;
      counterMultiplier = 3;
    }
    parent.append(htmlElement);
  });
}

const projectsContainer = document.querySelector('.projects__wrapper');

addElementsLadder(projectsContainer, dataProjects);

const elementsToWatch = projectsContainer.children;

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
};

const observerOptions = {
  rootMargin: '0px 0px -50px 0px',
  threshold: 0.2,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

for (element of elementsToWatch) {
  observer.observe(element);
}
