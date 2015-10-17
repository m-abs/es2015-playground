'use strict';

const set1 = new Set();
console.log(`Add values 1 and 'a' to the set:`);

set1.add(1);
set1.add('a');

console.log(`  size now: ${set1.size}`);

console.log(`Values in Sets are unique, add 1, NaN and 'b' to the same set:`);

set1.add(1);
set1.add('b');
console.log(`  size now: ${set1.size}`);

console.log(`
Check if a value is present in the set:
  2:   ${set1.has(2)}
  1:   ${set1.has(1)}
  'a': ${set1.has('a')}
  'b': ${set1.has('b')}
  'C': ${set1.has('C')}

  No implicit typecasting
    '1': ${set1.has(1)}

  NaN === NaN: ${NaN === NaN}
  But in a set:
    NaN: ${set1.has(NaN)}
`);

console.log('Sets can be destructed from any iterable object:');
const set2 = new Set(set1);

function compareSets(a, b) {
  let sameContent = true;
  if (a.size !== b.size) {
    sameContent = false;
  } else {
    for (const value of set2) {
      if (!set1.has(value)) {
        sameContent = false;
        break;
      }
    }
  }

  return sameContent;
}

console.log(`  set2 now has the same content as set1 had: ${compareSets(set1, set2)}`);
set2.add('C');

console.log(`  Added 'C' to set2, their content is nolonger the same: ${!compareSets(set1, set2)}`);

console.log(`
WeakSets:
  Like a set but holds weak references to it's content.
`);
const wset1 = new WeakSet();

try {
  wset1.add(1);
} catch (e) {
  console.log('Adding a primtive value to a WeakSet fails with the error', e);
}

const o = {
  k: 1
};

const o2 = {
  k: 2
};

wset1.add(o);
console.log(`
A WeakSet are much like a Set, you can check if it holds a value.
  wset1.has(o): ${wset1.has(o)}
  wset1.has(o2): ${wset1.has(o2)}
`);

console.log(`But you can't get the values in the WeakSet nor can you iterate over it's content`);
