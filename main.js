import InputParser from './InputParser.js';

const myForm = document.querySelector('#my-form');
const input_u = document.querySelector('#input_u');
const input_a = document.querySelector('#input_a');
const input_b = document.querySelector('#input_b');
const msg = document.querySelector('.msg');
const answerList = document.querySelector('#answers');

const compress_u = document.querySelector('#compress_u');

compress_u.addEventListener('click', (e) => {
    e.preventDefault();
    if (input_u.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter the U-field';

        setTimeout(() => msg.remove(), 4000);
    } else {
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(`U =  ${input_u.value}`)
        );

        answerList.appendChild(li);
    }
});
try {
    const test = '2,3,3,3,,,,,,4,5,6';
    console.log('Before Parsing: ' + test);
    console.log('After parsing: ' + InputParser.parseToString(test));
    console.log('test 2');

    const test2 = '8,,,,,,       ';
    console.log('Before Parsing: ' + test2);
    console.log('After parsing: ' + InputParser.parseToString(test2));

    console.log('test 3');

    const test3 = '1,';
    console.log('Before Parsing: ' + test3);
    console.log('After parsing: ' + InputParser.parseToArray(test3));
} catch (err) {
    console.log(err.message);
}

