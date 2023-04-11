const buttonScroll = document.querySelector('.promo__button');
const blockFocusForm = document.querySelector('.forms');

const initScroll = () => {
  buttonScroll.addEventListener('click', function () {
    blockFocusForm.scrollIntoView({behavior: 'smooth'});
  });
};

export {initScroll};
