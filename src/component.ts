import {MDCRipple} from '@material/ripple';

export function applyRipples() {
  const matButtons = document.querySelectorAll('.mdc-button');
  Array.from(matButtons).map((node) => {
    return new MDCRipple(node);
  });
}
