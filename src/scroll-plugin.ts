import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollmg = {
  initScrollMagic: () => {
    console.log('hi!');
    //let initial = {skew: 0};
    //const skewSetter = gsap.quickSetter('.highlight-card', 'skewY', 'deg');
    //const speed = gsap.utils.pipe(gsap.utils.clamp(-20, 20), gsap.utils.snap(1));

    ScrollTrigger.create({
      markers: false,
      onUpdate: (self: any) => {
        const scrollDirection = self.direction;
        const scrollPos = self.scroller.pageYOffset;
        let scrollingDown = false;
        scrollDirection === 1 ? (scrollingDown = true) : (scrollingDown = false);
        const headerNav = document.querySelector('#js-header');
        const headerHeight = headerNav?.getBoundingClientRect().height;

        if (headerHeight && scrollPos >= headerHeight) {
          scrollingDown
            ? headerNav?.classList.add('js-header--hidden')
            : headerNav?.classList.remove('js-header--hidden');
        }

        //const skew = speed(self.getVelocity() / 200);

        // if (Math.abs(skew) > initial.skew) {
        //   initial.skew = skew;
        //   gsap.to(initial, {
        //     duration: 0.8,
        //     skew: 0,
        //     ease: 'power3',
        //     overwrite: true,
        //     onUpdate: () => {
        //       skewSetter(initial.skew);
        //     },
        //   });
        // }
      },
    });

    gsap.to('#product-spotlight', {
      scrollTrigger: {
        // markers: true,
        trigger: '#product-spotlight',
        scrub: 0.6,
        start: 'top center',
        end: '300px center',
      },
      scale: 2.5,
      y: 300,
      ease: 'none',
    });

    gsap.to('#pixel5', {
      yPercent: 80,
      ease: 'none',
      scrollTrigger: {
        trigger: '#products',
        scrub: true,
      },
    });

    gsap.to('#products', {
      ease: 'none',
      yPercent: -30,
      scrollTrigger: {
        trigger: '#pixel5',
        scrub: true,
        start: '900px bottom',
      },
    });

    gsap.to('#pixel-front', {
      yPercent: 30,
      xPercent: 30,
      rotate: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '#products',
        scrub: true,
      },
    });

    gsap.to('#pixel-back', {
      yPercent: -40,
      xPercent: -40,
      rotate: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '#products',
        scrub: true,
      },
    });

    gsap.to('#pixel5-2', {
      yPercent: -25,
      ease: 'none',
      scrollTrigger: {
        trigger: '#products',
        scrub: 0.4,
      },
    });

    gsap.to('#pixel5-3', {
      yPercent: -45,
      ease: 'none',
      scrollTrigger: {
        trigger: '#products',
        scrub: 0.4,
      },
    });

    gsap.to('#pixel5-4', {
      yPercent: 45,
      ease: 'none',
      scrollTrigger: {
        trigger: '#products',
        scrub: 0.2,
      },
    });

    const newTl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '#trigger-3',
        toggleActions: 'play pause resume reverse',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    newTl
      .to('#bubble-1', {
        yPercent: -115,
        scale: 1,
      })
      .to(
        '#bubble-3',
        {
          yPercent: 115,
          scale: 1,
        },
        0
      )
      .to('#bubble-2', {
        scale: 1,
      });

    gsap.to('#notification', {
      scale: 1,
      opacity: 1,
      ease: 'ease',
      duration: 0.3,
      scrollTrigger: {
        trigger: '#trigger-3',
        toggleActions: 'play pause resume reverse',
        start: 'top center',
        end: 'bottom center',
      },
    });

    gsap.to('#all-bubbles', {
      x: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#trigger-4',
        //toggleActions: 'play pause resume reverse',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.to('.chat-bubble', {
      y: 0,
      ease: 'ease',
      scrollTrigger: {
        trigger: '#trigger-4',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.from('.chat-bubble--2', {
      yPercent: -20,
      ease: 'ease',
      scrollTrigger: {
        trigger: '#trigger-4',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    const recordTL = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '#trigger-5',
        toggleActions: 'play pause resume reverse',
        start: 'top center',
        end: 'center center',
        scrub: true,
      },
    });

    recordTL
      .to('.capture-share-feature', {
        y: 88,
      })
      .to('.record-modal', {
        y: 0,
        opacity: 1,
        ease: 'ease',
      })
      .to('.share-modal', {
        y: 0,
        opacity: 1,
        ease: 'ease',
      });

    const panels = gsap.utils.toArray('.feature-panel');
    panels.forEach((screen: any) => {
      ScrollTrigger.create({
        trigger: screen,
        markers: true,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: true,
        pinSpacing: false,
      });
    });

    gsap.to('.reply-bubbles', {
      x: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.feature-panel',
        //toggleActions: 'play pause resume reverse',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  },
};

export default scrollmg;
