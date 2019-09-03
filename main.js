// Importing files
import SetOperations from './SetOperations.js';
import InputParser from './InputParser.js';

const myForm = document.querySelector('#my-form');
const inputU = document.querySelector('#input_u');
const inputA = document.querySelector('#input_a');
const inputB = document.querySelector('#input_b');
const msg = document.querySelector('.msg');
const answerList = document.querySelector('#answers');
console.log(inputU.value);

compress_u.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (inputU.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter the U-field";

        setTimeout(() => msg.remove(), 4000);
    } else {
        try {
            const input = InputParser.parseToString(inputU.value);
            console.log(input);
            
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`U =  ${input}`));
            answerList.appendChild(li);
        } catch (err) {
            console.log(err);
        }     
    }
});

a_intersection_b.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (inputU.value === "" ||inputA.value === "" || inputB.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please fill in all the fields";

        setTimeout(() => msg.remove(), 4000);
    } else {
        try {
            const uSetInput = InputParser.parseToSet(inputU.value);
            const aSetInput = InputParser.parseToSet(inputA.value);
            const bSetInput = InputParser.parseToSet(inputB.value);

            const intersectionAnswer = SetOperations.intersection(uSetInput, aSetInput, bSetInput);
            const outputSet = SetOperations.makeSetFromBitstring(uSetInput, intersectionAnswer);
            const output = InputParser.parseFromSetToString(outputSet);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`A ∩ B = ${output}`));
            answerList.appendChild(li);
        } catch (err) {
            console.log(err);
        }
    }
});
