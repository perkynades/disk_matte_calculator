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
const setEven = new Set([2, 4, 6, 8, 10]);
const setOdd = new Set([1, 3, 5, 7, 9]);


console.log(setUniversal);
console.log(setEven);


// const testString = SetOperations.makeBitString(setA, setB);
const testString2 = SetOperations.makeBitStringFromSet(setUniversal, setEven);
// console.log(testString);
console.log('Test string 2 ' + testString2);
const setUnionAB = SetOperations.union(setEven, setB);
console.log(setUnionAB);
console.log('Make array from bitstring teststring2 ' +
    SetOperations.makeArrayFromBitString(testString2));


console.log('Intersection A and B ' +
    SetOperations.intersection(setUniversal, setA, setB));

console.log('Set A: ' + SetOperations.makeBitStringFromSet(setUniversal, setA));
console.log('Complement Set A: ' + SetOperations.complement(setUniversal, setA));
console.log('|Set A|: ' + SetOperations.cardinality(setA));
console.log('Set A contains element 5: ' + SetOperations.isAnElementInSet(setA, 5));
console.log('Set B contains element 5: ' + SetOperations.isAnElementInSet(setB, 5));
console.log('Set A is subset of Universal: ' + SetOperations.isSubset(setUniversal, setUniversal, setA));
console.log('Set A is subset of set B: ' + SetOperations.isSubset(setUniversal, setB, setA));
console.log('Set A and set B are disjunct: ' + SetOperations.disjunct(setUniversal, setA, setB));
console.log('Set Odd and set even is disjunct: ' + SetOperations.disjunct(setUniversal, setOdd, setEven));
console.log('The values in intersection of A and B');
console.log(SetOperations.makeSetFromBitstring(setUniversal, SetOperations.intersection(setUniversal, setA, setB)));
console.log('The values in intersection of Universal and Even');
console.log(SetOperations.makeSetFromBitstring(setUniversal, SetOperations.intersection(setUniversal, setUniversal, setEven)));
console.log('The values in intersection of Odd and Even');
console.log(SetOperations.makeSetFromBitstring(setUniversal, SetOperations.intersection(setUniversal, setOdd, setEven)));
console.log('The values in intersection of Odd and B');
console.log(SetOperations.makeSetFromBitstring(setUniversal, SetOperations.intersection(setUniversal, setOdd, setB)));
