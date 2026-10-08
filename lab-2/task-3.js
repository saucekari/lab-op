'use strict';

const average = (a, b) => ((a + b) / 2);
const square = (num) => (num * num);
const cube = (num) => (num * num * num);

const calculate = () => {
    const results = [];
    for (let i = 0; i <=9; i++)  {
        const sq = square(i);
        const cb = cube(i);
        const avg = average(sq, cb);
        results.push(avg)
    }
    return results;
};

console.log('Results:', calculate());