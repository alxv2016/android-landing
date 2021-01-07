import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollmg = {
  initScrollMagic: () => {
    // Android auto
    const androidAuto = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-android-auto',
        start: '-=200 top',
        end: 'bottom top',
        scrub: 0.45,
      },
    });

    androidAuto
      .to('.js-android-dash', {
        y: -98,
      })
      .to(
        '.js-android-device',
        {
          yPercent: 60,
          scale: 0.95,
        },
        0
      );

    // Security permissions
    const appPermissions = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-app-permissions',
        start: '-=50 center',
        end: 'center center',
        scrub: 0.45,
      },
    });

    appPermissions
      .fromTo(
        '.js-permissions-feature',
        {
          yPercent: 40,
        },
        {
          yPercent: 10,
        }
      )
      .fromTo(
        '.permissions-modal',
        {
          y: 188,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.25,
          ease: 'ease',
        }
      );

    // Security updates
    const securityUpdate = gsap.timeline({
      defaults: {
        ease: 'ease',
        stagger: 1.75,
        duration: 2.75,
        repeat: -1,
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-security-updates',
        start: '-=100 top',
        end: 'bottom top',
        toggleActions: 'play pause resume pause',
      },
    });

    securityUpdate
      .to('.js-wireless', {
        opacity: 1,
        scale: 4,
      })
      .to(
        '.js-wireless',
        {
          opacity: 0,
          scale: 8,
        },
        0.175
      );

    gsap.from('.js-security-feature', {
      yPercent: 40,
      ease: 'none',
      scrollTrigger: {
        markers: false,
        trigger: '.js-security-updates',
        start: '-=150 top',
        end: '100px top',
        scrub: 0.45,
      },
    });
  },
};

export default scrollmg;
