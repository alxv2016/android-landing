import Splide from '@splidejs/splide';

const slider = {
  initSlider: () => {
    const sliding = new Splide('#splider', {
      width: '100%',
      destroy: true,
      waitForTransition: true,
      speed: 225,
      perMove: 1,
      gap: '1em',
      padding: '1rem',
      arrows: true,
      pagination: true,
      keyboard: 'focused',
      updateOnMove: true,
      // classes: {
      //   // Add classes for arrows.
      //   arrows: 'splide__arrows your-class-arrows',
      //   arrow : 'splide__arrow your-class-arrow',
      //   prev  : 'splide__arrow--prev your-class-prev',
      //   next  : 'splide__arrow--next your-class-next',

      //   // Add classes for pagination.
      //   pagination: 'splide__pagination your-class-pagination', // container
      //   page      : 'splide__pagination__page your-class-page', // each button
      // },
      breakpoints: {
        767: {
          fixedWidth: '85%',
        },
      },
    });
    sliding.on('mounted', () => {
      console.log('Iam mounted!!');
    });
    sliding.mount();
    sliding.root.classList.add('capture-slide');
    sliding.on('moved', () => {
      console.log('I moved!!');
    });
  },
};

export default slider;
