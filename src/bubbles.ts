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
        scrub: 0.45,
        start: '-=120 center',
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
      )
      .from(
        '[data-target="chat-device"]',
        {
          yPercent: 15,
          scale: 0.95,
        },
        0
      );
  },
};

export default bubbles;
