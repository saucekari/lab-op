'use strict';

const fn = () => {
    const obj1 = {name: 'Helen'};
    let obj2 = {name: 'Ann'};

    obj1.name = 'Kari';
    obj2.name = 'Kate';

    // TypeError, так как obj1 объявлен через const, а obj2 через let
    // obj1 = {name: 'Dasha'}; 
    obj2 = {name: 'Polya'};

    console.dir( {obj1, obj2});
};

console.log(fn());
module.exports = fn;



const createUser = (name, city) => ({ name, city });

console.log(createUser('Marcus Aurelius', 'Roma'));