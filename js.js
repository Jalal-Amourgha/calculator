let screen = document.querySelector(".screen");
let btns = document.querySelectorAll(".button");
let string = "";
let result = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            screen.value = string;
            string = '';
        } else if (e.target.innerHTML === "AC") {
            string = "";
            screen.value = string;
        } else if (e.target.innerHTML === "x²") {
            string = string * string;
            string.value = string;
        } else {
            string += e.target.innerHTML;
            screen.value = string;
        }
    })
});

screen.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.keyCode = 187
    }
    result += e;
})
