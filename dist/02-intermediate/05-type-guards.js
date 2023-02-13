"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
// function isNull(val: any): val is null {
//   return !val;
// }
// const empty = '';
// const zero = 0;
// if (isNull(empty)) {
//   empty;
// }
// isNull(zero);
