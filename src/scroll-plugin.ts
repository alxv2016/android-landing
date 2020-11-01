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
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: '#product-spotlight',
        scrub: 0.4,
        start: 'top center',
        end: '300px center',
      },
      defaults: {ease: 'none'},
    });
    tl.to('#product-spotlight', {
      scale: 2,
      y: 200,
    }).to('#product-spotlight', {
      scale: 4,
      y: 600,
    });
    // gsap.to('#pixie', {
    //   scrollTrigger: {
    //     // markers: true,
    //     trigger: '#pixie',
    //     scrub: 0.4,
    //     start: 'top center',
    //     end: '300px center',
    //   },
    //   scale: 4,
    //   y: 200,
    //   ease: 'none',
    // });

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
      opacity: 1,
      scrollTrigger: {
        trigger: '#pixel5',
        scrub: 0,
        start: '900px bottom',
      },
    });

    gsap.to('#pixel-front', {
      yPercent: 30,
      xPercent: 30,
      rotate: -15,
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
  },
};

export default scrollmg;
