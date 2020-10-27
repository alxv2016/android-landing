import feather from 'feather-icons';
import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const material = {
  initTopBar: (): MDCTopAppBar => {
    const topAppBarElement: any = document.querySelector('.mdc-top-app-bar');
    return new MDCTopAppBar(topAppBarElement);
  },
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
