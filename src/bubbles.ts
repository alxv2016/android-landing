import {gsap} from 'gsap';

const bubbles = {
  renderAnimation() {
    const bubbles = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 4,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="chat-bubbles"]',
        scrub: 0.65,
        start: '-=100 center',
        end: 'center center',
      },
    });

    bubbles
      .to('[data-target="chat-messages"]', {
        y: -168,
      })
      .from(
        '[data-target="bubble"]',
        {
          stagger: 1.75,
          scale: 0.45,
        },
        0.75
      );
  },
};

export default bubbles;
