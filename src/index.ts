import './scss/app.scss';
import accordion from './accordion';
import scrollmg from './scroll-triggers';
import slider from './slider';

accordion.initAccordion();
scrollmg.initScrollMagic();
slider.initSlider();
slider.initSlider2();

function checkConfirmation() {
  const key = localStorage.getItem('confirmed');
  if (key) {
    const confirm = JSON.parse(key);
    return confirm;
  }
  return false;
}

const banner = document.querySelector('.js-notification-banner');
const confirmBtn = document.querySelector('.js-confirm');
const confirmed = checkConfirmation();

if (confirmed) {
  banner?.setAttribute('style', 'transform: translate(-50%, 300%); visibility: hidden;');
} else {
  banner?.setAttribute('style', 'visibility: visible;');
}

confirmBtn?.addEventListener('click', (ev) => {
  banner?.setAttribute('style', 'transform: translate(-50%, 300%); visibility: hidden;');
  localStorage.setItem('confirmed', 'true');
});
