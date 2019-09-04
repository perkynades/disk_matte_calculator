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

a_union_b.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (inputA.value === "" || inputB.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please fill in the A and B field";

        setTimeout(() => msg.remove(), 4000);
    } else {
        try {
            const aSetInput = InputParser.parseToSet(inputA.value);
            const bSetInput = InputParser.parseToSet(inputB.value);

            const unionAnswer = SetOperations.union(aSetInput, bSetInput);
            const outputSet = SetOperations.makeArrayFromBitString(unionAnswer);
            const output = InputParser. parseFromSetToString(outputSet);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`A ∪ B = ${output}`));
            answerList.appendChild(li);
        } catch (err) {
            console.log(err);
        }
    }
});

complement.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (inputA.value === "" || inputB.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please fill in the A and U field's";

        setTimeout(() => msg.remove(), 4000);
    } else {
        try {
            const aSetInput = InputParser.parseToSet(inputA.value);
            const uSetInput = InputParser.parseToSet(inputU.value);

            const complementAnswer = SetOperations.complement(uSetInput, aSetInput);
            const outputSet = SetOperations.makeArrayFromBitString(complementAnswer);
            const output = InputParser.parseFromSetToString(outputSet);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`Answer = ${output}`));
            answerList.appendChild(li);
        } catch (err) {
            console.log(err);
        }
    }
});

cardinality.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (inputU.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please fill in the U - field";

        setTimeout(() => msg.remove(), 4000);
    }
    try {
        const uSetInput = InputParser.parseToSet(inputU.value);
        const cardinalityAnswer = SetOperations.cardinality(uSetInput);

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`|U| = ${cardinalityAnswer}`));
        answerList.appendChild(li);
    } catch (err) {
        console.log(err);
    }
});

isAnElementInSet.addEventListener(`click`, (e) => {
    e.preventDefault();
    try {
        const uSetInput = InputParser.parseToSet(inputU.value);
        const aElementInput = InputParser.parseToString(inputA.value);
        const isAelementAnswer = SetOperations.isAnElementInSet(uSetInput, aElementInput);

        if (inputU.value === "" || inputA.value === "") {
            msg.classList.add("error");
            msg.innerHTML = "Please write your set in the U - field, and the what element you want to search for in the A - field";

            setTimeout(() => msg.remove(), 4000);
        } else if (isAelementAnswer === false) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`x ∉ A`));
            answerList.appendChild(li);
        } else {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`x ∈ A = ${isAelementAnswer}`));
            answerList.appendChild(li);
        }
    } catch (err) {
        console.log(err);
    }
});

isSubset.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (inputU.value === "" || inputA.value === "" || inputB.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please fill in the universal set in the U - field, the super set in the A - field, and the sub set in the B - field";
    } else {
        try {
            const uSetInput = InputParser.parseToSet(inputU.value);
            const superSetInput = InputParser.parseToSet(inputA.value);
            const subSetInput = InputParser.parseToSet(inputB.value);

            const isAsubSetAnswer = SetOperations.isAnElementInSet(uSetInput, superSetInput, subSetInput);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`A ⊆ B = ${isAsubSetAnswer}`));
            answerList.appendChild(li);
        } catch (err) {
            console.log(err);
        }
    }
});

disjunct.addEventListener(`click`, (e) => {
    e.preventDefault() 
    if (inputU.value === "" || inputA.value === "" || inputB.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please fill in all the fields";
    } else {
        try {
            const uSetInput = InputParser.parseToSet(inputU.value);
            const aSetInput = InputParser.parseToSet(inputA.value);
            const bSetInput = InputParser.parseToSet(inputB.value);

            const disjunctAnswer = SetOperations.disjunct(uSetInput, aSetInput, bSetInput);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`A ∨ B = ${disjunctAnswer}`));
        } catch (err) {
            console.log(err);
        }
    }
});
