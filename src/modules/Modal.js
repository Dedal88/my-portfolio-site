import { createElement } from './Utilities';

class modalWindow {
  static createModalWindow(textInWin = undefined, elementInWin = undefined) {
    const modalWrap = createElement({
      tag: 'div',
      classes: ['modalWrap'],
    });

    const modalWindow = createElement({
      tag: 'div',
      text: `${textInWin}`,
      classes: ['modalWindow'],
    });
    modalWrap.append(modalWindow);

    if (elementInWin) {
      modalWindow.append(elementInWin);
    }

    const modalCloseButton = createElement({
      tag: 'button',
      text: 'Закрыть',
      classes: ['modalCloseButton'],
    });
    modalWindow.append(modalCloseButton);
    modalCloseButton.addEventListener('click', function () {
      modalWrap.classList.remove('open');
    });

    modalWrap.addEventListener('click', function (event) {
      if (event.target === modalWrap) {
        modalWrap.classList.remove('open');
      }
    });

    const handleEscapeKey = function (event) {
      if (event.key === 'Escape' && modalWrap.classList.contains('open')) {
        modalWrap.classList.remove('open');
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    return modalWrap;
  }

  static openModalWindow(modalWinElem) {
    modalWinElem.classList.add('open');
  }
}

function createModalContactsContent() {
  const contentForModal = createElement({
    classes: ['modalContentContainer'],
  });

  const emailLink = createElement({
    tag: 'a',
    classes: ['social-icon'],
  });
  emailLink.setAttribute('href', 'mailto:audit37msv@yandex.ru');

  const emailIcon = createElement({
    tag: 'img',
    classes: ['social-icon__image'],
  });
  emailIcon.setAttribute('src', '/src/img/icons/mail.svg');
  emailIcon.setAttribute('alt', 'Email icon');

  const emailText = document.createTextNode(
    'Эл. почта:\u00A0\u00A0 audit37msv@yandex.ru',
  );
  emailLink.append(emailIcon, emailText);

  const telegramLink = createElement({
    tag: 'a',
    classes: ['social-icon'],
  });
  telegramLink.setAttribute('href', 'tg://resolve?domain=Sergey');

  const telegramIcon = createElement({
    tag: 'img',
    classes: ['social-icon__image'],
  });
  telegramIcon.setAttribute('src', '/src/img/icons/telegram.svg');
  telegramIcon.setAttribute('alt', 'Telegram icon');

  const telegramText = document.createTextNode('Tелеграм:\u00A0\u00A0 Sergey');
  telegramLink.append(telegramIcon, telegramText);

  const phoneLink = createElement({
    tag: 'a',
    classes: ['social-icon'],
  });
  phoneLink.setAttribute('href', 'tel:+79158326698');

  const phoneIcon = createElement({
    tag: 'img',
    classes: ['social-icon__image'],
  });
  phoneIcon.setAttribute('src', '/src/img/icons/phone.svg');
  phoneIcon.setAttribute('alt', 'Phone icon');

  const phoneText = document.createTextNode(
    'Телефон:\u00A0\u00A0 +79158326698',
  );
  phoneLink.append(phoneIcon, phoneText);

  contentForModal.append(emailLink, telegramLink, phoneLink);
  return contentForModal;
}

export function connectModalWindow() {
  const modalContactsContent = createModalContactsContent();
  const modal = modalWindow.createModalWindow('', modalContactsContent);
  document.body.appendChild(modal);
  const showContactsButton = document.querySelector('.header__button');
  showContactsButton.addEventListener('click', () => {
    modalWindow.openModalWindow(modal);
  });
}
