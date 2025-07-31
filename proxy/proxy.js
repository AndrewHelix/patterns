const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
};

const personProxy = new Proxy(person, {
  get(target, prop) {
    if (!target[prop]) {
      console.warn('There is no value for this prop');
    } else {
      console.log(`Value for prop ${prop} is ${target[prop]}`);
    }
  },
  set(target, prop, newValue) {
    if (prop === 'age' && typeof newValue !== 'number') {
      console.warn('Age is not valid');
    } else if (
      prop === 'name' &&
      (typeof newValue !== 'string' || newValue.length < 2)
    ) {
      console.warn('Name is not valid');
    } else {
      console.log(`New value for ${prop} is ${newValue}`);
      target[prop] = newValue;
    }
  },
});

personProxy.age;
personProxy.salary;

personProxy.age = 'test';
personProxy.name = 1;
personProxy.age = 43;
