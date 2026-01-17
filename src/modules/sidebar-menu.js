export function sidebarMenu() {
  const hamburger = document.querySelector('.hamburger');
  const sidebarMenu = document.querySelector('.sidebar-menu');
  const sidebarCloseBtn = document.querySelector('.sidebar-menu__close-btn');
  const sidebarOverlay = document.querySelector('.sidebar-menu__overlay');
  const sidebarLinks = document.querySelectorAll('.sidebar-menu__link');

  function openSidebarMenu() {
    sidebarMenu.classList.add('sidebar-menu_open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebarMenu() {
    sidebarMenu.classList.remove('sidebar-menu_open');
    document.body.style.overflow = 'auto';
  }

  hamburger.addEventListener('click', openSidebarMenu);
  sidebarCloseBtn.addEventListener('click', closeSidebarMenu);
  sidebarOverlay.addEventListener('click', closeSidebarMenu);

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', closeSidebarMenu);
  });

  swipeSidebar(closeSidebarMenu, sidebarOverlay, sidebarMenu);
}

function swipeSidebar(closeSidebar, sidebarOverlay, sidebarMenu) {
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50;

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    if (
      swipeDistance > swipeThreshold &&
      sidebarMenu.classList.contains('sidebar-menu_open')
    ) {
      closeSidebar();
    }
  }

  sidebarOverlay.addEventListener('touchstart', handleTouchStart, {
    passive: true,
  });
  sidebarOverlay.addEventListener('touchend', handleTouchEnd, {
    passive: true,
  });

  const sidebarContent = document.querySelector('.sidebar-menu__content');
  sidebarContent.addEventListener('touchstart', handleTouchStart, {
    passive: true,
  });
  sidebarContent.addEventListener('touchend', handleTouchEnd, {
    passive: true,
  });
}
