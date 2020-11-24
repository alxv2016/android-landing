class Accordion {
  accordionHeaders: NodeListOf<Element>;
  accordionPanels: NodeListOf<Element>;
  expanded: boolean;
  constructor() {
    this.accordionHeaders = document.querySelectorAll('.js-accordion-header');
    this.accordionPanels = document.querySelectorAll('.js-accordion-panel');
    this.expanded = false;
    this.togglePanel = this.togglePanel.bind(this);
    this.initAccordion();
  }

  initAccordion() {
    if (this.accordionPanels) {
      this.accordionPanels.forEach((panel) => {
        panel.setAttribute('style', 'height: 0; visibility: hidden;');
      });
    }
    if (this.accordionHeaders) {
      this.accordionHeaders.forEach((header, i) => {
        header.firstElementChild?.setAttribute('aria-expanded', `${this.expanded}`);
        header.firstElementChild?.addEventListener('click', (ev) => {
          this.togglePanel(ev, i);
        });
      });
    }
  }

  togglePanel(ev: any, i: number) {
    const panelHeight = this.accordionPanels[i].scrollHeight;
    if (ev.target.getAttribute('aria-expanded') === 'true') {
      ev.target.setAttribute('aria-expanded', this.expanded);
      ev.target.classList.remove('is-opened');
      this.accordionPanels[i].setAttribute('style', 'height: 0; visibility: hidden;');
    } else {
      ev.target.setAttribute('aria-expanded', !this.expanded);
      ev.target.classList.add('is-opened');
      this.accordionPanels[i].setAttribute('style', `height: ${panelHeight}px; visibility: visible;`);
    }
  }
}

// Instantiation
const components = {
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
  initAccordion: () => {
    return new Accordion();
  },
};

export default components;
