import {gsap} from 'gsap';

const voiceControl = {
  renderAnimation() {
    const voiceControl = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 10,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="voice-control"]',
        scrub: 0.65,
        start: '-=100 center',
        end: 'bottom center',
      },
    });

    voiceControl.to('[data-target="voice-control"]', {
      yPercent: -10,
    });
  },
};

export default voiceControl;
