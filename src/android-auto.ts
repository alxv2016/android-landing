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
        scrub: 0.65,
        start: '-=200 center',
        end: 'center center',
      },
    });

    androidAuto
      .from('[data-target="android-auto-dash"]', {
        yPercent: 30,
      })
      .from(
        '[data-target="android-auto-phone"]',
        {
          yPercent: 50,
        },
        0.45
      );
  },
};

export default androidAuto;
