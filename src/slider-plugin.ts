import Splide from '@splidejs/splide';

const slider = {
  initSlider: () => {
    const sliding = new Splide('#superSlide', {
      perPage: 2,
    }).mount();
    console.log(sliding);
  },
};

export default slider;
