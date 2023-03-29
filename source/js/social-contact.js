const contactButton = document.querySelector('.social__contact-button');
const contactIconOpen = document.querySelector('.social__contact-icon--open');
const contactIconClose = document.querySelector('.social__contact-icon--close');

function showContactButton() {
  contactButton.addEventListener('click', () => {
    if (contactIconClose.classList.contains('social__contact-icon--close-hidden')) {
      contactIconClose.classList.remove('social__contact-icon--close-hidden');
      contactIconOpen.classList.add('social__contact-icon--open-hidden');
    } else {
      contactIconClose.classList.add('social__contact-icon--close-hidden');
      contactIconOpen.classList.remove('social__contact-icon--open-hidden');
    }
  });
}

export {showContactButton};
