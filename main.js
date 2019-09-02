const myForm = document.querySelector("#my-form");
const input_u = document.querySelector("#input_u");
const input_a = document.querySelector("#input_a");
const input_b = document.querySelector("#input_b");
const msg = document.querySelector(".msg");
const answerList = document.querySelector("#answers");

const compress_u = document.querySelector("#compress_u");

compress_u.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (input_u.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter the U-field";

        setTimeout(() => msg.remove(), 4000);
    } else {
        const li = document.createElement("li");
        li.appendChild(
            document.createTextNode(`U =  ${input_u.value}`)
        );

        answerList.appendChild(li);
    }
});

