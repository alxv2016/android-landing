import Splide from '@splidejs/splide';

const slider = {
  initSlider: () => {
    const sliding = new Splide('#superSlide', {
      width: '100%',
      fixedWidth: '30%',
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
        1200: {
          //perPage: 4,
          fixedWidth: '40%',
        },
        576: {
          focus: 'center',
          fixedWidth: '85%',
        },
      },
    });
    sliding.on('mounted', () => {
      console.log('Iam mounted!!');
    });
    sliding.mount();
    sliding.root.classList.add('my-slider');
    sliding.on('moved', () => {
      console.log('I moved!!');
    });
  },
};

export default slider;
