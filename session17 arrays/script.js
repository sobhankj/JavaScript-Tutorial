let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

fruits[2] = 'pineapple';
fruits[5] = 'grape';

fruits.push('pear'); // adds an element to the end of the array
let lastFruit = fruits.pop(); // removes the last element of the array
console.log(lastFruit);

fruits.unshift('orange'); // adds an element to the beginning of the array
let firstFruit = fruits.shift(); // removes the first element of the array
console.log(firstFruit);