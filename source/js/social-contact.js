const contactWrapperTwo = document.querySelector('.social__contact-wrapper-two');
const contactButtonTwo = document.querySelector('.social__contact-button-two');
const contactWrapper = document.querySelector('.social__contact-wrapper');
const contactButton = document.querySelector('.social__contact-button');
const contactIconOpen = document.querySelector('.social__contact-icon--open');
const contactIconOpenTwo = document.querySelector('.social__contact-icon-two--open');
const contactIconClose = document.querySelector('.social__contact-icon--close');
const contactIconCloseTwo = document.querySelector('.social__contact-icon-two--close');

function showContactButton() {
  contactButton.addEventListener('click', () => {
    if (contactWrapper.classList.contains('is-active')) {
      contactIconClose.classList.add('social__contact-icon--close-hidden');
      contactIconOpen.classList.remove('social__contact-icon--open-hidden');
    } else {
      contactIconClose.classList.remove('social__contact-icon--close-hidden');
      contactIconOpen.classList.add('social__contact-icon--open-hidden');
    }
  });
}

function showContactButtonTwo() {
  contactButtonTwo.addEventListener('click', () => {
    if (contactWrapperTwo.classList.contains('is-active')) {
      contactIconCloseTwo.classList.add('social__contact-icon-two--close-hidden');
      contactIconOpenTwo.classList.remove('social__contact-icon-two--open-hidden');
    } else {
      contactIconCloseTwo.classList.remove('social__contact-icon-two--close-hidden');
      contactIconOpenTwo.classList.add('social__contact-icon-two--open-hidden');
    }
  });
}

export {showContactButton, showContactButtonTwo};
