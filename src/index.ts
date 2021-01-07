import './scss/app.scss';
import accordion from './accordion';
import scrollmg from './scroll-triggers';
import slider from './slider';
import hero from './hero';
import conversations from './conversations';
import bubbles from './bubbles';
import captureShare from './capture-share';
import smartFeatures from './smart-features';
import voiceControl from './voice-control';
import deviceControls from './device-controls';
import mediaControls from './media-controls';
import androidAuto from './android-auto';

accordion.initAccordion();
//scrollmg.initScrollMagic();
hero.renderAnimation();
conversations.renderAnimation();
bubbles.renderAnimation();
captureShare.renderAnimation();
smartFeatures.renderAnimation();
voiceControl.renderAnimation();
deviceControls.renderAnimation();
mediaControls.renderAnimation();
androidAuto.renderAnimation();

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
  banner?.setAttribute('style', 'transform: translateY(100%); visibility: hidden;');
} else {
  banner?.removeAttribute('style');
}

confirmBtn?.addEventListener('click', (ev) => {
  banner?.setAttribute('style', 'transform: translateY(100%); visibility: hidden;');
  localStorage.setItem('confirmed', 'true');
});
