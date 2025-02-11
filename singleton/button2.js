import singletonCounter from './singleton.js';

const incrementButton = document.getElementById('button2i');
const decrementButton = document.getElementById('button2d');

export function initModule2() {
  incrementButton.addEventListener('click', (e) => {
    singletonCounter.increment();
    console.log(singletonCounter.getCount());
  });

  decrementButton.addEventListener('click', (e) => {
    singletonCounter.decrement();
    console.log(singletonCounter.getCount());
  });
}
