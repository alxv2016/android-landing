import feather from 'feather-icons';
import {MDCRipple} from '@material/ripple';

const material = {
  applyRipples: () => {
    const matButtons = document.querySelectorAll('.mdc-button');
    Array.from(matButtons).map((node) => {
      return new MDCRipple(node);
    });
  },
  featherIcons: () => {
    feather.replace();
  },
};

export default material;
