let screen = document.querySelector(".screen");
let btns = document.querySelectorAll(".button");
let string = "";

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            screen.value = string;
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
