// Importing files
import SetOperations from './SetOperations.js';
import InputParser from './InputParser.js';

const myForm = document.querySelector('#my-form');
const input_u = document.querySelector('#input_u');
const input_a = document.querySelector('#input_a');
const input_b = document.querySelector('#input_b');
const msg = document.querySelector('.msg');
const answerList = document.querySelector('#answers');

// compress_u.addEventListener(`click`, (e) => {
//     e.preventDefault();
//     if (input_u.value === "") {
//         msg.classList.add("error");
//         msg.innerHTML = "Please enter the U-field";

//         setTimeout(() => msg.remove(), 4000);
//     } else {
//         const li = document.createElement("li");
//         li.appendChild(
//             document.createTextNode(`U =  ${input_u.value}`)
//         );

//         answerList.appendChild(li);
//     }
// });

// Set event litener for A union B
// When clicked start SetOperations.union(A,B)
// Display output on page

// testing
const setUniversal = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const setA = new Set([2, 3, 6, 7, 10]);
const setB = new Set([2, 3, 5]);
const setPar = new Set([2, 4, 6, 8, 10]);


console.log(setUniversal);
console.log(setPar);



// const testString = SetOperations.makeBitString(setA, setB);
const testString2 = SetOperations.makeBitString(setUniversal, setPar);
// console.log(testString);
console.log('Test string 2 ' + testString2);
const setUnionAB = SetOperations.union(setPar, setB);
console.log(setUnionAB);
console.log('Make array from bitstring teststring2 ' + SetOperations.makeArrayFromBitString(testString2));


console.log('Intersection A and B ' + SetOperations.intersection(setUniversal, setA, setB));
