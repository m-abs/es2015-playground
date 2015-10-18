'use strict';

const helper = {
  get array2d() {
    const output = [];
    for (let i = 1; i <= 12; i += 1) {
      output.push([i, i / 2 * 1.5]);
    }

    return output;
  }
};

console.log(`
Create a Map and add values:
`);
const map1 = new Map();
const [
  idx1,
  v1
] = helper.array2d.shift();
map1.set(idx1, v1);
console.log(`See if the map has the key: ${map1.has(idx1)}`);
console.log(`Get the value of the key: ${map1.get(idx1)} === ${v1}`);

console.log(`A Map is iteratable:`);
for (const [key, value] of map1) {
  console.log(`  ${key}: ${value}`);
}

console.log(`Map.set is chainable:`);
map1.set('a', 1).set('E', new Date() / 1).set(new Date(), 'date');

for (const [key, value] of map1) {
  console.log(`  ${key}: ${value}`);
}

console.log('Values can be deleted from the Map');
map1.delete('E');
for (const [key, value] of map1) {
  console.log(`  ${key}: ${value}`);
}

console.log(`Maps can be created from a iteratable if each item contains two values, a key and a value.`);
const map2 = new Map(helper.array2d);
for (const [key, value] of map2) {
  console.log(`  ${key}: ${value}`);
}

