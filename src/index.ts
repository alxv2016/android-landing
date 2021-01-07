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

(function checkConfirmation() {
  const confirmed = function hasConfirmed() {
    const key = localStorage.getItem('confirmed');
    if (key) {
      const confirm = JSON.parse(key);
      return confirm;
    } else {
      return false;
    }
  };
  const banner = document.querySelector('[data-target="notification-banner"]');
  const confirmBtn = banner?.lastElementChild;
  if (confirmed()) {
    banner?.setAttribute('style', 'display: none;');
  } else {
    banner?.setAttribute('style', 'display: flex;');
  }
  confirmBtn?.addEventListener('click', (ev) => {
    console.log(ev);
    banner?.setAttribute('style', 'display: none;');
    localStorage.setItem('confirmed', 'true');
  });
})();

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
