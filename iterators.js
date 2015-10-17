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
  },
  get map() {
    return new Map(this.array.map(function(value) {
      return [value, value * 1.25];
    }));
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

console.log('    Arrays, Sets and Maps are iterable:');
console.log('      array:');
for (const value of helper.array) {
  console.log('        ', value);
}

console.log('      set:');
for (const value of helper.set) {
  console.log('        ', value);
}

console.log('      map:');
for (const value of helper.map) {
  console.log('        ', value[0], '=', value[1]);
}

console.log('    Making our own iteratable objects:');
const iteratableObj = {
  data: helper.array.map(function(v) {
    return Math.floor(v * 1.323);
  }),
  *[Symbol.iterator]() {
    for (const v of this.data) {
      yield v;
    }
  }
};

console.log('      for..of iteratableObj:');
for (const value of iteratableObj) {
  console.log('        ', value);
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

const iteratableObjOld = {
  data: helper.array.map(function(v) {
    return Math.floor(v * 1.323);
  }),
  iterator: function() {
    let idx = -1;
    const self = this;
    return {
      next: function() {
        idx += 1;
        const output = {
          done: idx >= self.data.length,
          value: undefined
        };

        if (!output.done) {
          output.value = self.data[idx];
        } else {
          idx = self.data.length;
        }

        return output;
      }
    };
  }
};

const objIterator = iteratableObjOld.iterator();
while (true) {
  const data = objIterator.next();
  if (data.done) {
    break;
  }

  const value = data.value;
  console.log('       ', value);
}
