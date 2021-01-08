import {gsap} from 'gsap';

const androidAuto = {
  renderAnimation() {
    const androidAuto = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 4,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="android-auto"]',
        scrub: 0.45,
        start: '-=120 center',
        end: 'center center',
      },
    });

    androidAuto
      .from('[data-target="android-auto-phone"]', {
        yPercent: 15,
        scale: 0.95,
      })
      .from(
        '[data-target="android-auto-dash"]',
        {
          yPercent: 20,
          scale: 0.9,
        },
        0.25
      );
  },
};

export default androidAuto;
