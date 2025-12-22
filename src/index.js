const dataProjects = [
  {
    imageUrl: './img/icons/bulb.svg',
    title: 'Проект 1',
    description: 'Текст описывающий проект 1',
    deployUrl: '',
  },
  {
    imageUrl: './img/icons/bulb.svg',
    title: 'Проект 2',
    description: 'Текст описывающий проект 2',
    deployUrl: '',
  },
  {
    imageUrl: './img/icons/bulb.svg',
    title: 'Проект 3',
    description: 'Текст описывающий проект 3',
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

  const projectButton = createElement({
    tag: 'button',
    text: 'Посмотреть деплой',
    classes: ['button', 'project__button', 'project__button_disabled_true'],
  });

  const buttonWrapper = createElement({ tag: 'a' });
  buttonWrapper.setAttribute('href', deployUrl);
  buttonWrapper.setAttribute('target', '_blank');
  buttonWrapper.append(projectButton);

  projectWrapper.append(projectImage, projectTitle, projectText, buttonWrapper);

  return projectWrapper;
}

function addElements(parent, dataElement) {
  dataElement.forEach((element) => {
    parent.append(createProject(element));
  });
}

const projectsContainer = document.querySelector('.projects__wrapper');

addElements(projectsContainer, dataProjects);
