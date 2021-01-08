import {gsap} from 'gsap';

const captureShare = {
  renderAnimation() {
    const captureShare = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 4,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="capture-share"]',
        scrub: 0.45,
        start: '-=120 center',
        end: 'center center',
      },
    });

    captureShare
      .from('[data-target="share-screen"]', {
        yPercent: 40,
        scale: 0.95,
      })
      .from('[data-target="share-modal"]', {
        y: 90,
        opacity: 0,
      });
  },
};

export default captureShare;
