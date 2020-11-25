import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollmg = {
  initScrollMagic: () => {
    // Header on scroll animation
    ScrollTrigger.create({
      onUpdate: (self: any) => {
        const scrollDirection = self.direction;
        const scrollPos = self.scroller.pageYOffset;
        let scrollingDown = false;
        scrollDirection === 1 ? (scrollingDown = true) : (scrollingDown = false);
        const headerNav = document.querySelector('.js-header');
        const headerHeight = headerNav?.getBoundingClientRect().height;

        if (headerHeight && scrollPos >= headerHeight) {
          scrollingDown
            ? headerNav?.classList.add('js-header--hidden')
            : headerNav?.classList.remove('js-header--hidden');
        }
      },
    });
    // Hero animations
    const spotlight = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 3,
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-spotlight',
        scrub: true,
        start: 'top center',
        end: '568px center',
      },
    });
    spotlight
      .to('.js-spotlight', {
        yPercent: 30,
      })
      .to(
        '.js-spotlight',
        {
          scale: 9,
        },
        1.25
      );

    const heroProducts = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-product-features',
        scrub: true,
      },
    });

    heroProducts
      .to('.js-hero-product', {
        yPercent: 40,
        ease: 'none',
      })
      .to(
        '.js-product-front',
        {
          yPercent: 20,
          xPercent: 20,
          rotate: 8,
          scale: 0.95,
        },
        0
      )
      .to(
        '.js-product-back',
        {
          yPercent: -20,
          xPercent: -20,
          rotate: 8,
          scale: 0.95,
        },
        0
      )
      .to(
        '.js-feature-1',
        {
          yPercent: -25,
        },
        0
      )
      .to(
        '.js-feature-2',
        {
          yPercent: -45,
        },
        0
      )
      .to(
        '.js-feature-3',
        {
          yPercent: 45,
        },
        0.2
      );
    // Manage conversations
    const conversations = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-conversations',
        start: '-=100 center',
        end: 'center center',
        scrub: true,
      },
    });

    conversations
      .to('.js-priority-1', {
        yPercent: -115,
        scale: 1,
      })
      .to(
        '.js-priority-2',
        {
          yPercent: 115,
          scale: 1,
        },
        0
      )
      .to('.js-priority-3', {
        scale: 1,
      })
      .to('.js-notification', {
        scale: 1,
        opacity: 1,
        ease: 'ease',
        duration: 0.3,
      });

    // Chat bubbles
    const bubbles = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-chat',
        start: '-=100 center',
        end: 'center center',
        scrub: true,
      },
    });

    bubbles
      .to(
        '.js-messages',
        {
          y: -120,
          ease: 'ease',
        },
        0.2
      )
      .to(
        '.js-chat-bubble-1',
        {
          yPercent: 160,
        },
        0
      )
      .to(
        '.js-chat-bubble-2',
        {
          yPercent: 60,
        },
        0
      )
      .from('.js-bubble', {
        scale: 0.45,
        ease: 'ease',
        stagger: 0.25,
      });
    // Screen share & capture
    const captureShare = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-capture-share',
        start: '-=100 center',
        end: 'center center',
        scrub: true,
      },
    });

    captureShare
      .fromTo(
        '.js-cs-feature',
        {
          yPercent: 40,
        },
        {
          yPercent: 10,
        }
      )
      .fromTo(
        '.cs-modal',
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

    // Smart features
    gsap.to('.smart-reply', {
      opacity: 1,
      x: 0,
      ease: 'ease',
      scrollTrigger: {
        markers: false,
        trigger: '.js-panel-1',
        start: '-=50 top',
        end: 'bottom top',
        toggleActions: 'play pause resume reverse',
      },
    });

    const smartReply = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '.js-panel-1',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    smartReply
      .to('.js-smart-reply', {
        yPercent: 60,
      })
      .to(
        '.js-replies',
        {
          yPercent: -20,
        },
        0
      )
      .to(
        '.js-panel-overlay-1',
        {
          opacity: 1,
        },
        0.125
      );

    const appSuggestion = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-panel-2',
        start: '-=50 top',
        end: 'bottom top',
        scrub: true,
      },
    });

    appSuggestion
      .to('.js-app-suggestion', {
        yPercent: 60,
      })
      .to(
        '.js-apps',
        {
          yPercent: -20,
        },
        0
      )
      .to(
        '.js-panel-overlay-2',
        {
          opacity: 1,
        },
        0.125
      );

    gsap.from('.js-app', {
      opacity: 0,
      scale: 0.46,
      stagger: 0.125,
      ease: 'bounce',
      scrollTrigger: {
        markers: false,
        trigger: '.js-panel-2',
        start: '-=50 top',
        end: 'center top',
        toggleActions: 'play pause resume reverse',
      },
    });

    const smartFolders = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: '.js-panel-3',
        start: '-=50 top',
        end: 'bottom top',
        toggleActions: 'play pause resume reverse',
      },
    });

    smartFolders
      .from('.js-folder', {
        opacity: 0,
        xPercent: -20,
        ease: 'ease',
      })
      .from(
        '.js-folder-app',
        {
          opacity: 0,
          scale: 0.46,
          stagger: 0.125,
          ease: 'bounce',
        },
        0.125
      );

    const smartFolderPanel = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        markers: false,
        trigger: '.js-panel-3',
        start: '-=50 top',
        end: 'bottom top',
        scrub: true,
      },
    });

    smartFolderPanel
      .to('.js-smart-folders', {
        yPercent: 60,
      })
      .to(
        '.js-folder',
        {
          yPercent: -90,
        },
        0
      )
      .to(
        '.js-panel-overlay-3',
        {
          opacity: 1,
        },
        0.125
      );

    // Voice control
    gsap.to('.js-feature-image', {
      yPercent: 20,
      scrollTrigger: {
        markers: false,
        trigger: '.js-voice-control',
        start: '-=300 top',
        end: 'center top',
        scrub: true,
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
        scrub: true,
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
        scrub: true,
      },
    });

    const music = gsap.timeline({
      defaults: {
        ease: 'bounce',
        stagger: 0.35,
        duration: 0.95,
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
        scrub: true,
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
        scrub: true,
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
        duration: 3,
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
        start: '-=50 top',
        end: '200px top',
        scrub: true,
      },
    });
  },
};

export default scrollmg;
