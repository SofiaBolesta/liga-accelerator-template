const buttonScroll = document.querySelector('.promo__button');
const blockFocusForm = document.querySelector('.form');

const initScroll = () => {
  buttonScroll.addEventListener('click', function () {
    blockFocusForm.scrollIntoView();
    blockFocusForm.scrollIntoView({behavior: 'smooth'});
  });
};

export {initScroll};
