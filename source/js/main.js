import {initAccordions} from './init-accordion.js';
import {initPhoneMask} from './phone-mask.js';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initScroll} from './init-scroll';
import {scrollMenu} from './scroll-menu.js';
import {showButtonText} from './about-company';
import {showContactButton, showContactButtonTwo} from './social-contact.js';
import {initPhoneInput} from './modules/form-validate/init-phone-input.js';
import {CustomSelect} from './modules/select/custom-select.js';
import {Form} from './modules/form-validate/form';
import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
import {getLimitationsRegEx} from './modules/form-validate/regular-expression.js';

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
    initPhoneInput();
    uploadFile();
    uploadImageDrop();
    getLimitationsRegEx('name');
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    window.form.validateForm(parent);
    form.init();
  });
});
// ---------------------------------

/* window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  scrollMenu();
  initScroll();
  showButtonText();
  initAccordions();
  showContactButton();
  showContactButtonTwo();
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initPhoneMask();
    initPhoneInput();
    const form = new Form();
    window.form = form;
    window.form.validateForm('forms__question');
    window.form.initPhoneInput(parent);
    window.form.validateFormElement('input', true);
    form.init();
  });

}); */

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
