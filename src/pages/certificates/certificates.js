import {
  createElement,
  animationAppearanceElements,
} from '../../modules/Utilities';
import { headerScroll } from '../../modules/Header';
import { sidebarMenu } from '../../modules/sidebar-menu';

const dataCertificates = [
  {
    imageUrl: '../../../src/img/cert/frontend-rs.png',
    accreditationUrl: 'https://app.rs.school/certificate/p45xl5ng',
  },
  {
    imageUrl: '../../../src/img/cert/react-rs.png',
    accreditationUrl: 'https://app.rs.school/certificate/c75yik34',
  },
  {
    imageUrl: '../../../src/img/cert/react-additional.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/fa433cfeeb40407f89552ab995d620b1',
  },

  {
    imageUrl: '../../../src/img/cert/react-hooks.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/4883e581ff91423990a7832d4c35839e',
  },
  {
    imageUrl: '../../../src/img/cert/react-lifecycle-methods.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/d2c01edb69ee42179f3ca8e1cd1a47a0',
  },
  {
    imageUrl: '../../../src/img/cert/react-state-management.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/c060a64e62274b1abe8e9d316100aef9',
  },
  {
    imageUrl: '../../../src/img/cert/ts.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/56fb1e71303e37b643bb1905f31c8a09',
  },
  {
    imageUrl: '../../../src/img/cert/react-introduction.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/1bf3e70ae92b43c2a3add66cbfaec661',
  },
  {
    imageUrl: '../../../src/img/cert/js-web.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/36ae898a1d1c8524815305b2d1d2ebab',
  },
  {
    imageUrl: '../../../src/img/cert/js.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/705dcb15de0da4dd9d9fc4f3274b430e',
  },
  {
    imageUrl: '../../../src/img/cert/css.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/9a5bb1fc45b4281af1fffec93b0aaf05',
  },
  {
    imageUrl: '../../../src/img/cert/html.png',
    accreditationUrl:
      'https://www.codecademy.com/profiles/cloud3911776086/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7',
  },
];

headerScroll();

sidebarMenu();

function createCertificate(options) {
  const { imageUrl = '', accreditationUrl = '' } = options;

  const certificateWrapper = createElement({
    tag: 'article',
    classes: ['project', 'certificate'],
  });

  const certificateImage = createElement({
    tag: 'img',
    classes: ['certificate__image'],
  });
  certificateImage.setAttribute('src', imageUrl);
  certificateImage.setAttribute('alt', 'certificate image');

  const linkWrapperSertificate = createElement({
    tag: 'a',
    classes: ['certificate__link-wrapper'],
  });
  linkWrapperSertificate.setAttribute('href', accreditationUrl);
  linkWrapperSertificate.setAttribute('target', '_blank');
  linkWrapperSertificate.append(certificateImage);

  certificateWrapper.append(linkWrapperSertificate);

  return certificateWrapper;
}

const certificatesContainer = document.querySelector('.certificates__wrapper');

animationAppearanceElements(
  certificatesContainer,
  dataCertificates,
  createCertificate,
);
