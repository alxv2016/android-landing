import {gsap} from 'gsap';

const mediaControls = {
  renderAnimation() {
    const mediaControls = gsap.timeline({
      defaults: {
        duration: 0.45,
        ease: 'back',
        stagger: 0.65,
        repeat: -1,
        yoyo: true,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="media-controls"]',
        start: '-=200 center',
        end: 'bottom center',
        toggleActions: 'play pause resume pause',
      },
    });

    mediaControls.from('[data-target="beat"]', {
      scale: 0.25,
    });

    const mediaDevice = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 4,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="media-controls"]',
        scrub: 0.45,
        start: '-=120 center',
        end: 'center center',
      },
    });

    mediaDevice.from('[data-target="media-device"]', {
      yPercent: 15,
      scale: 0.95,
    });
  },
};

export default mediaControls;
