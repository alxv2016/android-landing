import {gsap} from 'gsap';

const conversations = {
  renderAnimation() {
    const conversation = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 4,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="conversations"]',
        scrub: 0.45,
        start: '-=120 center',
        end: 'center center',
      },
    });

    conversation
      .to('[data-target="priority"]', {
        yPercent: -115,
      })
      .to(
        '[data-target="silent"]',
        {
          yPercent: 115,
        },
        0.75
      )
      .from('[data-target="conversations-ui"]', {
        scale: 0.75,
        opacity: 0,
      })
      .from(
        '[data-target="conversations-device"]',
        {
          scale: 0.95,
          yPercent: 15,
        },
        0
      );
  },
};

export default conversations;
