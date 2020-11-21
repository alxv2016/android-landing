import feather from 'feather-icons';

// Instantiation
const icons = {
  // inlineLineSVG: () => {
  //   const images = document.querySelectorAll('img');
  //   if (images !== undefined) {
  //     images.forEach((image) => {
  //       fetch(image.src)
  //         .then((res) => res.text())
  //         .then((data) => {
  //           const parser = new DOMParser();
  //           const svg: any = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
  //           if (image.id) svg.id = image.id;
  //           if (image.className) svg.classList = image.classList;
  //           image.parentNode!.replaceChild(svg, image);
  //         })
  //         .catch((error) => console.error(error));
  //     });
  //   }
  // },
  // initTabs: () => {
  //   const tabEl = document.querySelector('.mdc-tab-bar');
  //   if (tabEl) {
  //     const tabs = MDCTabBar.attachTo(tabEl);
  //     tabs.listen('MDCTabBar:activated', (ev) => {
  //       console.log(ev);
  //     });
  //   }
  // },
  featherIcons: () => {
    feather.replace();
  },
};

export default icons;
