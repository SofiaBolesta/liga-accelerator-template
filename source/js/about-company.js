const buttonShow = document.querySelector('.content__button');
const textButtonOpen = document.querySelector('.content__text-button-open');
const textButtonClose = document.querySelector('.content__text-button-close');

function showButtonText() {
  buttonShow.addEventListener('click', () => {
    if (textButtonClose.classList.contains('content__text-button-close--hidden')) {
      textButtonOpen.classList.add('content__text-button-open--hidden');
      textButtonClose.classList.remove('content__text-button-close--hidden');
    } else {
      textButtonOpen.classList.remove('content__text-button-open--hidden');
      textButtonClose.classList.add('content__text-button-close--hidden');
    }
  });
}

export {showButtonText};
