import {gsap} from 'gsap';

const deviceControls = {
  renderAnimation() {
    const deviceControls = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 4,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="device-controls"]',
        scrub: 0.45,
        start: '-=120 center',
        end: 'center center',
      },
    });

    deviceControls
      .from('[data-target="smart-home-controls"]', {
        yPercent: 15,
        scale: 0.95,
      })
      .from(
        '[data-target="smart-home"]',
        {
          yPercent: 20,
          scale: 0.9,
        },
        0.25
      )
      .from(
        '[data-target="house-lights"]',
        {
          opacity: 0,
        },
        0.45
      );
  },
};

export default deviceControls;
