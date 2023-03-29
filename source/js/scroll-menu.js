const header = document.querySelector('.js-header');
const headerH = document.querySelector('.js-header').clientHeight;

function scrollMenu() {
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

export {scrollMenu};
