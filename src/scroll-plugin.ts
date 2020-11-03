import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollmg = {
  initScrollMagic: () => {
    console.log('hi!');
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
      yPercent: -65,
      ease: 'none',
      scrollTrigger: {
        trigger: '#products',
        scrub: true,
      },
    });

    gsap.to('#pixel5-3', {
      yPercent: -25,
      ease: 'none',
      scrollTrigger: {
        trigger: '#products',
        scrub: true,
      },
    });

    gsap.to('#pixel5-4', {
      yPercent: 45,
      ease: 'none',
      scrollTrigger: {
        trigger: '#products',
        scrub: true,
      },
    });

    const newTl = gsap.timeline({
      defaults: {
        ease: 'ease',
      },
      scrollTrigger: {
        trigger: '#trigger-3',
        toggleActions: 'play pause resume reverse',
        start: 'top center',
        end: 'bottom center',
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

    gsap.to('#all-bubbles', {
      x: 0,
      ease: 'ease',
      scrollTrigger: {
        trigger: '#trigger-4',
        toggleActions: 'play pause resume reverse',
        start: 'top center',
        end: 'bottom center',
      },
    });
  },
};

export default scrollmg;
