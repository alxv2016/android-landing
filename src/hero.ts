import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const hero = {
  initHeader() {
    ScrollTrigger.create({
      onUpdate: (self: any) => {
        const scrollDirection = self.direction;
        const scrollPos = self.scroller.pageYOffset;
        let scrollingDown = false;
        scrollDirection === 1 ? (scrollingDown = true) : (scrollingDown = false);
        const headerNav = document.querySelector('[data-target="header"]');
        const headerHeight = headerNav?.getBoundingClientRect().height;

        if (headerHeight && scrollPos >= headerHeight) {
          scrollingDown ? headerNav?.setAttribute('data-state', 'hidden') : headerNav?.removeAttribute('data-state');
        }
      },
    });
  },
  renderAnimation() {
    this.initHeader();
    const heroDevice = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 6,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="hero-device"]',
        scrub: 0.45,
        start: '-=100 top',
        end: 'bottom top',
      },
    });

    heroDevice
      .to('[data-target="hero-device-front"]', {
        yPercent: 35,
        xPercent: 4,
        rotate: 6,
        scale: 0.92,
      })
      .to(
        '[data-target="hero-device-back"]',
        {
          yPercent: 20,
          xPercent: -4,
          rotate: 5,
          scale: 0.92,
        },
        0
      )
      .to(
        '[data-target="hero-spotlight"]',
        {
          yPercent: 18,
          scale: 9,
        },
        0
      );

    const androidFeatures = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 8,
        delay: 0.75,
      },
      scrollTrigger: {
        markers: false,
        trigger: '[data-trigger="android-features"]',
        scrub: 0.65,
        start: 'top top',
        end: 'bottom top',
      },
    });

    androidFeatures
      .fromTo(
        '[data-target="android-feature-1"]',
        {
          yPercent: 60,
        },
        {
          yPercent: -70,
        }
      )
      .fromTo(
        '[data-target="android-feature-2"]',
        {
          yPercent: 60,
        },
        {
          yPercent: -30,
        },
        0.45
      )
      .fromTo(
        '[data-target="android-feature-3"]',
        {
          yPercent: 60,
        },
        {
          yPercent: -100,
        },
        0.45
      );
  },
};

export default hero;
