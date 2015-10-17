'use strict';

const helper = {
  get array() {
    const output = [];
    for (let i = 1; i <= 12; i += 1) {
      output.push(i * i / 2 * 1.2);
    }

    return output;
  },
  get obj() {
    const keys = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'
    ];
    const output = {
    };

    const values = this.array;
    for (let idx = 0; idx < keys.length; idx += 1) {
      const key = keys[idx];
      const value = values[idx];

      output[key] = value;
    }

    return output;
  }
};

(function() {
  let [a, b, c, d, e, f, , h, , j] = helper.array;
  let g, i, k, l;

  console.log(`
    a: ${a}
    b: ${b}
    c: ${c}
    d: ${d}
    e: ${e}
    g: ${g}
    f: ${f}
    h: ${h}
    i: ${i}
    j: ${j}
    k: ${k}
    l: ${l}
  `);
})();

(function() {
  let {
    a, b, c, d, e, f, h, j, l:L
  } = helper.obj;
  let g, i, k, l;

  console.log(`
    a: ${a}
    b: ${b}
    c: ${c}
    d: ${d}
    e: ${e}
    g: ${g}
    f: ${f}
    h: ${h}
    i: ${i}
    j: ${j}
    k: ${k}
    l: ${l}
    L: ${L}
  `);
})();
