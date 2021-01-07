import './scss/app.scss';
import accordion from './accordion';
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
import permissions from './permissions';
import security from './security';

accordion.initAccordion();
slider.initSlider();
slider.initSlider2();
hero.renderAnimation();
conversations.renderAnimation();
bubbles.renderAnimation();
captureShare.renderAnimation();
smartFeatures.renderAnimation();
voiceControl.renderAnimation();
deviceControls.renderAnimation();
mediaControls.renderAnimation();
androidAuto.renderAnimation();
permissions.renderAnimation();
security.renderAnimation();

(function checkConfirmation() {
  const key = localStorage.getItem('confirmed');
  if (key) {
    const confirm = JSON.parse(key);
    return confirm;
  }
  const banner = document.querySelector('.js-notification-banner');
  const confirmBtn = document.querySelector('.js-confirm');
  if (key) {
    banner?.setAttribute('style', 'transform: translateY(100%); visibility: hidden;');
  } else {
    banner?.removeAttribute('style');
  }
  confirmBtn?.addEventListener('click', (ev) => {
    banner?.setAttribute('style', 'transform: translateY(100%); visibility: hidden;');
    localStorage.setItem('confirmed', 'true');
  });
})();
