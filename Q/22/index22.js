"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
// function to create a fruit object.
function createFruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
;
// create an array of Fruits.
const fruits = [
    createFruit("Apple", "Red", "Sweet"),
    createFruit("Banana", "Yellow", "Sweet"),
    createFruit("Orange", "Orange", "Citrusy"),
    createFruit("Grap", "Yellow", "Sweet"),
    createFruit("Strawberry", "Red", "Sweet"),
];
//Access an invalid index.
const invalidIndex = 10;
// There are only 5 elements in the array , so this will cause an error.
console.log(`Fruit at index ${invalidIndex}: `, fruits[invalidIndex]);
//Print the fruit.
fruits.forEach((fruit) => {
    console.log(` Name: ${fruit.name}  , Color: ${fruit.color},  Taste:  ${fruit.taste} `);
});
