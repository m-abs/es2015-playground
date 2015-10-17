'use strict';

const helper = {
  get array() {
    const output = [];
    for (let i = 1; i <= 20; i += 1) {
      output.push(Math.ceil(i * (i / 2)));
    }

    return output;
  },
  get set() {
    return new Set(this.array);
  }
};

console.log('Generators:');

console.log('  Writing our own generator function:');
function * generateIterator() {
  for (const v of helper.array) {
    yield v;
  }
}

console.log('    for..of loop');
for (const value of generateIterator()) {
  console.log('      ', value);
}

console.log('  Both arrays and sets are iterable:');
console.log('    array:');
for (const value of helper.array) {
  console.log('      ', value);
}

console.log('    set:');
for (const value of helper.set) {
  console.log('      ', value);
}

console.log('  Without using es2015 features:');
console.log('    This function does the same as our generateInterator function above:');
function generateInteratorOld() {
  const values = helper.array;
  console.log('      generators returns an object with the function next():');
  let first = true;
  return {
    next: function() {
      if (first) {
        first = false;
        console.log('        next() return the object {done: <BOOLEAN>, value: <VALUE> }');
      }

      if (!values.length) {
        console.log('        Iterator has moved beyond the last element:');
      }

      return {
        done: !values.length,
        value: values.shift()
      };
    }
  };
}

const iteratorOld = generateInteratorOld();
while (true) {
  const data = iteratorOld.next();
  if (data.done) {
    break;
  }

  const value = data.value;
  console.log('       ', value);
}
