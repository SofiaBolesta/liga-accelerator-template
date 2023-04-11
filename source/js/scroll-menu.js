const header = document.querySelector('.js-header');
const headerH = document.querySelector('.js-header').clientHeight;
const desktopWidthMediaQuery = window.matchMedia('(min-width: 1024px)');

function scrollMenu() {
  if (desktopWidthMediaQuery.matches) {
    document.onscroll = function () {
      let scroll = window.scrollY;

      if (scroll > headerH - 10) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
      } else {
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
      }
    };
  }
}

export {scrollMenu};
