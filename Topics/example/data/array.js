//  Adding an element to the end of an array
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');
// console.log(seas); 

// Adding an element to the beginning of an array
let seas1 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.unshift('Red Sea');

// console.log(seas);


// Removing an element from the end of an array
let seas2 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas.pop();
// console.log(lastElement); 


// Removing an element from the beginning of an array
let seas3 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas.shift();

// console.log(firstElement);

// Finding an index of an element in the array

let seas4 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas.indexOf('North Sea');

// console.log(index); // 2


// let numbers = [10, , 20, 30];

// numbers[10]=100;
// console.log(numbers.length); 
// console.log(numbers[1]);
// console.log(numbers);

// const fruits = ['Apple', 'Orange', 'Strawberry'];
// fruits.length = 0;

// Slice is use for insert and delete element
let scores = [1,2,3,4,5]
let deletedScores = scores.splice(0, 3);

// console.log(scores);
// console.log(deletedScores);


let colors1 = ['red', 'green', 'blue'];
colors1.splice(2, 0, 'purple'); // 0 is refer to = not delete that element
console.log(colors1); // ["red", "green", "purple", "blue"]


let colors = ['red', 'green', 'blue'];
colors.splice(2, 1, 'purple'); // 0 is refer to = not delete that element
// console.log(colors);
