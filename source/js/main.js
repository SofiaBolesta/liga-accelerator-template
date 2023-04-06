import {initAccordions} from './init-accordion.js';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initScroll} from './init-scroll';
import {scrollMenu} from './scroll-menu.js';
import {showButtonText} from './about-company';
import {showContactButton, showContactButtonTwo} from './social-contact.js';
import {Form} from './modules/form-validate/form';
import {initPhoneMask} from './phone-mask.js';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  scrollMenu();
  initScroll();
  showButtonText();
  initAccordions();
  showContactButton();
  showContactButtonTwo();
  window.addEventListener('load', () => {
    initModals();
    initPhoneMask();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
