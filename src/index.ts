import './index.scss';
console.log('hello webpack');

function component(): HTMLElement {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello webpack!!!!!!';
  element.classList.add('hello');
  return element;
}
// test hot
document.body.appendChild(component());