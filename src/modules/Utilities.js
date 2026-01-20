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
  creatorElementFunction
) {
  parent.replaceChildren();
  dataElement.forEach((element) => {
    const htmlElement = creatorElementFunction(element, true);
    htmlElement.style.marginBottom = `${20}px`;
    parent.append(htmlElement);
  });
}

export function animationAppearanceElements(elementsToWatch) {
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

  for (const element of elementsToWatch) {
    observer.observe(element);
  }
}
