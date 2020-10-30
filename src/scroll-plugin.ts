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
        trigger: '#pixie',
        scrub: 0.6,
        start: 'top center',
        end: '300px center',
      },
      defaults: {ease: 'none'},
    });
    tl.to('#pixie', {
      scale: 2,
      y: 200,
    }).to('#pixie', {
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

    gsap.to('#pixel5-1', {
      yPercent: 200,
      ease: 'none',
      scrollTrigger: {
        markers: true,
        trigger: '#trigger-2',
        scrub: true,
      },
    });
  },
};

export default scrollmg;
