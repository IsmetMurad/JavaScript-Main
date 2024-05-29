// Creting Array (Massiv)
const value = [1, 2, 3];
const arr = [1, 2, 3, 4, true, false, 'string'];
const newValue = new Array(10).fill('text')
// Getting value by index and index starts from 0

console.log(arr[0]);
console.log(arr[5]);
// Array lenght 

console.log(arr.length);
// select the array last element 

console.log(arr[arr.length - 1]);

// Array Methods

const students = ['Ismet', 'Kaknan', 'Huseyn']

// Adding the Anar last
students.push('Anar');
console.log(students);
// adding the Orxan first
students.unshift('Orxan')
console.log(students);
// delete the first element
students.shift();
console.log(students);
// delete the last element
students.pop();
console.log(students);

// Includes 
const num = [1, 2, 3, 4, 5, 6];
console.log(num.includes(3)); // search the 3 in the array 'true' or 'false'

// Filter
console.log(num.filter((item)=>item!=3)); // delete the 3 in the array
console.log(num.filter(item=>item < 3)); // In the array show the number less than 3


