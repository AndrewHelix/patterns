import { initModule1 } from './button1.js';
import { initModule2 } from './button2.js';

let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error('Instance already exists');
    }
    return;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    counter++;
  }

  decrement() {
    counter--;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

initModule1();
initModule2();
