let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let result = ""
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "clear") {
            input.value = "";
            result;

        } else if (button.id === "backspace") {
            input.value = input.value.slice(0, -1);
            result;
        } else if (button.id === "equals") {
            input.value = eval(input.value);
            result;
        } else {
            input.value += button.textContent;
            result;
        }

    });
});