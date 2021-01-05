import {gsap} from 'gsap';

const captureShare = {
  renderAnimation() {
    const captureShare = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 8,
      },
      scrollTrigger: {
        markers: true,
        trigger: '[data-trigger="capture-share"]',
        scrub: 0.65,
        start: '-=100 center',
        end: 'center center',
      },
    });

    captureShare
      .from('[data-target="share-screen"]', {
        yPercent: 40,
      })
      .from('[data-target="share-modal"]', {
        y: 90,
        opacity: 0,
      });
  },
};

export default captureShare;
