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
    gsap.to('#pixie', {
      scrollTrigger: {
        markers: true,
        trigger: '#pixie',
        scrub: 0.4,
        start: 'top center',
        end: '300px center',
      },
      scale: 4,
      y: 200,
      borderRadius: 0,
      ease: 'none',
    });
  },
};

export default scrollmg;
