import {gsap} from 'gsap';

const smartFeatures = {
  renderAnimation() {
    const features = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 6,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="feature-screens"]',
        scrub: 0.65,
        start: 'top center',
        end: 'bottom center',
      },
    });

    features.to('[data-target="feature-screen"]', {
      yPercent: 10,
      stagger: 3.75,
    });

    const smartReply = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 3,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="smart-reply"]',
        scrub: 0.65,
        start: 'top center',
        end: 'center center',
      },
    });

    smartReply.from(
      '[data-target="reply-bubble"]',
      {
        xPercent: 80,
        scale: 0.75,
        stagger: 0.25,
      },
      0
    );

    const appSuggestions = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 3,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="app-suggestion"]',
        scrub: 0.65,
        start: 'top center',
        end: 'center center',
      },
    });

    appSuggestions.from(
      '[data-target="app"]',
      {
        scale: 0.45,
        stagger: 1.25,
      },
      0
    );

    const smartFolder = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 4,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="smart-folder"]',
        scrub: 0.65,
        start: 'top center',
        end: 'center center',
      },
    });

    smartFolder
      .from('[data-target="smart-folder"]', {
        xPercent: 100,
      })
      .from(
        '[data-target="app-folder"]',
        {
          scale: 0.45,
          opacity: 0,
          stagger: 1.25,
          duration: 2.5,
        },
        0.75
      );
  },
};

export default smartFeatures;
