
const array = [4, 4, 8, 3, 3, 3, 2, 4, 4];

console.log("Array elements:");
array.forEach(element => console.log(element));

console.log("\nThe first 3 elements of the array:");
console.log(array.slice(0, 3));

const totalSum = array.reduce((sum, current) => sum + current, 0);
console.log("\nSum of all elements:", totalSum);

const filteredSum = array.reduce((sum, current) => current === 4 ? sum : sum + current, 0);
console.log("Sum of all elements minus 4:", filteredSum);
