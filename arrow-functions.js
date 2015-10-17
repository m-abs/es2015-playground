'use strict';

const helper = {
  get array() {
    const output = [];
    for (let i = 1; i <= 12; i += 1) {
      output.push(i * i / 2 * 1.5);
    }

    return output;
  }
};

console.log('implicit return without {...}', helper.array.filter((v) => v % 2 === 0));
console.log('No implicit return with {...}', helper.array.filter((v) => {
  return v % 2 !== 0;
}));

const obj = {
  data: helper.array,
  wrapThis: function(o) {
    const inner = (o) => {
      return this === o;
    };

    return inner(o);
  }
};

console.log(`
Arrow function wraps:
  this === obj: ${obj.wrapThis(obj)}
  this === helper: ${obj.wrapThis(helper)}
`);
