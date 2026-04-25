export function createElement(options) {
  const { tag = 'div', text = '', classes = [] } = options;
  const element = document.createElement(tag);
  element.textContent = text;

  if (classes.length > 0) {
    element.classList.add(...classes);
  }

  return element;
}

export function addElementsLadder(parent, dataElement, creatorElementFunction) {
  let countElements = 3;
  let counterMultiplier = 3;

  parent.replaceChildren();

  dataElement.forEach((element) => {
    const htmlElement = creatorElementFunction(element);
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

export function addElementsWithoutLadder(
  parent,
  dataElement,
  creatorElementFunction,
) {
  parent.replaceChildren();
  dataElement.forEach((element) => {
    const htmlElement = creatorElementFunction(element, true);
    htmlElement.style.marginBottom = `${20}px`;
    parent.append(htmlElement);
  });
}

export function createProject(options, isMobile = false) {
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

export function animationAppearanceElements(
  elementsContainer,
  dataElements,
  functionCreatorElement,
) {
  const elementsToWatch = elementsContainer.children;
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  (function handleScreenChange(e) {
    if (e.matches) {
      addElementsLadder(
        elementsContainer,
        dataElements,
        functionCreatorElement,
      );
    } else {
      addElementsWithoutLadder(
        elementsContainer,
        dataElements,
        functionCreatorElement,
      );
    }

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

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    for (const element of elementsToWatch) {
      observer.observe(element);
    }
  })(mediaQuery);

  mediaQuery.addEventListener('change', handleScreenChange);
}
