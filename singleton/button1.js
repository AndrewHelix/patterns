import singletonCounter from './singleton.js';

const incrementButton = document.getElementById('button1i');
const decrementButton = document.getElementById('button1d');

export function initModule1() {
  incrementButton.addEventListener('click', (e) => {
    singletonCounter.increment();
    console.log(singletonCounter.getCount());
  });

  decrementButton.addEventListener('click', (e) => {
    singletonCounter.decrement();
    console.log(singletonCounter.getCount());
  });
}
