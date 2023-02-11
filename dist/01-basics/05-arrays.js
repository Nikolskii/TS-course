"use strict";
const numbers = [1, 2, 3, 4];
const strs = [];
const strs2 = [];
strs.push('asv');
const cars = [];
cars.push({
    brand: 'audi',
    wheels: 4,
    type: 'sedan',
});
const arrOfArr = [];
arrOfArr.push(['', '']);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}
