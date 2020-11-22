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
    gsap.to('.js-spotlight', {
      scrollTrigger: {
        trigger: '.js-spotlight',
        scrub: 0.6,
        start: 'top center',
        end: '300px center',
      },
      scale: 2.5,
      y: 300,
      ease: 'none',
    });

    const heroProducts = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
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

    const bubblesTl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '.js-bubbles-trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    bubblesTl
      .to('.js-bg-bubbles', {
        x: 0,
      })
      .to(
        '.js-chat-messages',
        {
          y: -120,
          ease: 'ease',
        },
        0.2
      )
      .to(
        '.js-chat-bubble-1',
        {
          yPercent: 60,
        },
        0
      )
      .to(
        '.js-chat-bubble-2',
        {
          yPercent: -60,
        },
        0
      );

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

    gsap.to('.reply-bubbles', {
      opacity: 1,
      x: 0,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.js-panel-1',
        start: '-=300 top',
        end: 'center top',
        toggleActions: 'play pause resume reverse',
      },
    });

    gsap.to('.js-fs-1', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.js-panel-1',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.js-fs-2', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.js-panel-2',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.from('.app-bubbles__bubble', {
      opacity: 0,
      scale: 0.46,
      stagger: 0.125,
      ease: 'bounce',
      scrollTrigger: {
        trigger: '.js-panel-2',
        start: '-=300 top',
        end: 'center top',
        toggleActions: 'play pause resume reverse',
      },
    });

    const folderBubTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.js-panel-3',
        start: '-=300 top',
        end: 'center top',
        toggleActions: 'play pause resume reverse',
      },
    });

    folderBubTl
      .from('.folder-bubbles', {
        opacity: 0,
        xPercent: 40,
      })
      .from(
        '.folder-bubbles__bubble',
        {
          opacity: 0,
          scale: 0.46,
          stagger: 0.125,
          ease: 'bounce',
        },
        0.125
      );

    gsap.to('.js-fs-3', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.js-panel-3',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    //
    const vcTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.js-voice-section',
        start: '-=400 top',
        end: 'center top',
        scrub: true,
      },
    });

    vcTl
      .to('.vc-feature-image', {
        // scale: 0.85,
        y: 200,
        ease: 'none',
      })
      .from('.vc-soundwaves', {
        y: -18,
        ease: 'none',
      });

    const audioLines = gsap.utils.toArray('.vc-soundwaves__wave');
    audioLines.forEach((line: any) => {
      gsap.to(line, {
        scaleY: gsap.utils.random(1, 8, 4),
        repeat: -1,
        ease: 'ease',
        duration: 0.3,
        yoyo: true,
        onRepeat: () => {
          gsap.to(line, {
            scaleY: gsap.utils.random(1, 8, 3),
            repeat: -1,
            ease: 'ease',
            duration: 0.25,
            yoyo: true,
          });
        },
      });
    });

    const controlsTl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '.js-control-trigger',
        start: '-=400 top',
        end: 'top top',
        scrub: true,
      },
    });

    controlsTl
      .from('.js-fs-house', {
        y: 88,
      })
      .to(
        '.fs-houselight-on',
        {
          opacity: 1,
        },
        0.125
      );

    const soundWave = gsap.timeline({
      defaults: {
        ease: 'power1',
        stagger: 0.45,
        duration: 0.85,
        repeat: -1,
        yoyo: true,
      },
      scrollTrigger: {
        trigger: '.js-media-section',
        start: '-=300 top',
        end: 'center top',
        toggleActions: 'play pause resume pause',
      },
    });

    soundWave
      .to('.speaker__wave', {
        opacity: 0.25,
        scale: 6,
      })
      .to('.speaker__wave', {
        opacity: 1,
        scale: 0.425,
      });

    const autoTl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '.l-android-auto',
        start: '-=300 top',
        end: 'top top',
        scrub: true,
      },
    });

    autoTl
      .from('.js-auto', {
        y: 88,
        scale: 0.95,
      })
      .to(
        '.js-android',
        {
          y: 280,
          scale: 0.95,
        },
        0.125
      );

    const permissionsTl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '.l-permissions',
        toggleActions: 'play pause resume reverse',
        start: 'top center',
        end: 'center center',
        scrub: true,
      },
    });

    permissionsTl
      .to('.permissions-feature', {
        y: 88,
      })
      .to('.permissions-modal', {
        y: 0,
        opacity: 1,
        ease: 'ease',
      })
      .to('.permissions-modal', {
        y: 0,
        opacity: 1,
        ease: 'ease',
      });

    const radioWaves = gsap.timeline({
      defaults: {
        ease: 'power1',
        stagger: 1.25,
        duration: 3,
        repeat: -1,
      },
      scrollTrigger: {
        trigger: '.l-security',
        start: '-=300 top',
        end: 'center top',
        toggleActions: 'play pause resume pause',
      },
    });

    radioWaves
      .to('.radio-waves__wave', {
        opacity: 0.75,
        scale: 4,
      })
      .to(
        '.radio-waves__wave',
        {
          opacity: 0.45,
          scale: 9,
        },
        0.125
      )
      .to(
        '.radio-waves__wave',
        {
          opacity: 0,
        },
        0.25
      );

    gsap.from('.fs-security-updates', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.l-security',
        start: '-=400 top',
        end: 'top top',
        scrub: true,
      },
    });

    gsap.from('.outro-container', {
      yPercent: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.l-security',
        start: '-=180 top',
        end: 'top top',
        scrub: true,
      },
    });
  },
};

export default scrollmg;
