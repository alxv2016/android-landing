import Splide from '@splidejs/splide';

const slider = {
  initSlider: () => {
    const sliding = new Splide('#superSlide', {
      perPage: 3,
      // type: 'loop',
      waitForTransition: true,
      perMove: 1,
      focus: 'center',
      gap: '1em',
      padding: '2em',
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
        640: {
          perPage: 2,
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
