export function headerScroll() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.classList.add('header_scrolled');
    } else {
      header.classList.remove('header_scrolled');
    }
  });
}
