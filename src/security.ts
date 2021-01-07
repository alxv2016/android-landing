import {gsap} from 'gsap';

const security = {
  renderAnimation() {
    const security = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 8,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="security"]',
        scrub: 0.65,
        start: '-=100 center',
        end: 'center center',
      },
    });

    security.from('[data-target="security-screen"]', {
      yPercent: 45,
      scale: 1.25,
    });

    gsap.set('[data-target="signal]', {});

    const wifi = gsap.timeline({
      defaults: {
        duration: 2,
        ease: 'ease',
        stagger: 0.45,
        repeat: -1,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="security"]',
        start: '-=200 center',
        end: 'bottom center',
        toggleActions: 'play pause resume pause',
      },
    });

    wifi.fromTo(
      '[data-target="signal"]',
      {
        scale: 0.25,
        opacity: 1,
      },
      {
        scale: 2.45,
        opacity: 0,
      }
    );
  },
};

export default security;
