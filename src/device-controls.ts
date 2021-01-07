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
        scrub: 0.65,
        start: '-=200 center',
        end: 'center center',
      },
    });

    deviceControls
      .from('[data-target="smart-home"]', {
        yPercent: 30,
      })
      .from(
        '[data-target="smart-home-controls"]',
        {
          yPercent: 50,
        },
        0.45
      )
      .from(
        '[data-target="house-lights"]',
        {
          opacity: 0,
        },
        0.75
      );
  },
};

export default deviceControls;
