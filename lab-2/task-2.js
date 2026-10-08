'use strict';


const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const rangeOdd = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
};

console.log('Range:', range(1, 15));
console.log('Range Odd:', rangeOdd(1, 30));