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
  },
};

export default mediaControls;
