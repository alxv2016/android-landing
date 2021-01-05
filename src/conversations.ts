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
        scrub: 0.65,
        start: '-=200 center',
        end: 'center center',
      },
    });

    conversation
      .from('[data-target="conversations-ui"]', {
        scale: 0.75,
        opacity: 0,
      })
      .to(
        '[data-target="priority"]',
        {
          yPercent: -115,
        },
        0.75
      )
      .to(
        '[data-target="silent"]',
        {
          yPercent: 115,
        },
        0.75
      );
  },
};

export default conversations;
