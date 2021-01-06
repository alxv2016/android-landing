import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollmg = {
  initScrollMagic: () => {
    // Voice control
    gsap.to('.js-feature-image', {
      yPercent: 20,
      scrollTrigger: {
        markers: false,
        trigger: '.js-voice-control',
        start: '-=300 top',
        end: 'center top',
        scrub: 0.25,
      },
    });

    const voiceAudio = gsap.utils.toArray('.js-audio');
    voiceAudio.forEach((audio: any) => {
      gsap.to(audio, {
        scaleY: gsap.utils.random(1, 8, 4),
        repeat: -1,
        ease: 'ease',
        duration: 0.25,
        yoyo: true,
        onRepeat: () => {
          gsap.to(audio, {
            scaleY: gsap.utils.random(1, 8, 3),
            repeat: -1,
            ease: 'ease',
            duration: 0.175,
            yoyo: true,
          });
        },
      });
    });
    // Device controls
    const deviceControls = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 0.125,
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-device-controls',
        start: '-=100 top',
        end: '100px top',
        scrub: 0.175,
      },
    });

    deviceControls
      .from('.js-house-lights', {
        y: 40,
      })
      .to(
        '.js-controls',
        {
          yPercent: 10,
        },
        0
      )
      .to(
        '.js-lights',
        {
          opacity: 1,
        },
        0
      );

    // Media controls
    gsap.to('.js-music-controls', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        markers: false,
        trigger: '.js-media-controls',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.45,
      },
    });

    const music = gsap.timeline({
      defaults: {
        ease: 'back',
        stagger: 0.35,
        duration: 0.65,
        repeat: -1,
        yoyo: true,
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-media-controls',
        start: '-=150 top',
        end: 'center top',
        toggleActions: 'play pause resume pause',
      },
    });

    music.to('.js-music', {
      opacity: 0.25,
      fill: '#ea4335',
      scale: 22,
    });

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
