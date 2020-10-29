import {gsap} from 'gsap';
import {CSSRulePlugin} from 'gsap/CSSRulePlugin';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const scrollmg = {
  initScrollMagic: () => {
    console.log('hi!');
    ScrollTrigger.create({
      onUpdate: (self) => {
        console.log(self.direction);
      },
    });
    // const controller = new scroll.Controller();
    // const scene = new scroll.Scene({
    //   triggerElement: '#trigger-one',
    //   duration: 400,
    // })
    //   .addTo(controller)
    //   .on('update', (e: UpdateEvent) => {
    //     const scrollDirection = e.target.controller().info('scrollDirection');
    //     const scrollPos = e.scrollPos;
    //     let scrollingDown = false;
    //     scrollDirection === 'FORWARD' ? (scrollingDown = true) : (scrollingDown = false);
    //     const headerNav = document.querySelector('#js-header');
    //     const headerHeight = headerNav?.getBoundingClientRect().height;
    //     if (headerHeight && scrollPos >= headerHeight) {
    //       scrollingDown
    //         ? headerNav?.classList.add('js-header--hidden')
    //         : headerNav?.classList.remove('js-header--hidden');
    //     }
    //   });
    // const scene2 = new scroll.Scene({
    //   triggerElement: '#trigger-two',
    //   offset: 320,
    // })
    //   .on('enter leave', (e: EnterEvent) => {
    //     const entered = e.type === 'enter' ? true : false;
    //     const greendot = document.querySelector('#pixie');
    //     entered ? greendot?.classList.remove('js-pixel-circle') : greendot?.classList.add('js-pixel-circle');
    //     console.log(entered);
    //   })
    //   .addTo(controller);
  },
};

export default scrollmg;
