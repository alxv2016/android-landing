import {gsap} from 'gsap';

const permissions = {
  renderAnimation() {
    const permissions = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 8,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="permissions"]',
        scrub: 0.65,
        start: '-=100 center',
        end: 'center center',
      },
    });

    permissions
      .from('[data-target="permissions-screen"]', {
        yPercent: 40,
      })
      .from('[data-target="permissions-modal"]', {
        y: 90,
        opacity: 0,
      });
  },
};

export default permissions;
