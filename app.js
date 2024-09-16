/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculatorButtonElement = document.querySelector("#calculator");
const display = document.querySelector(".display");
//const row = document.querySelector(".row");
/*-------------------------------- Variables --------------------------------*/
let num1 = "";
let num2 = "";
let operator = "";
let changeNum = false;
//let decimal = ".";
//let clear = "C";
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
    if (event.target.classList.contains("number") && changeNum === false) {
        num1 += event.target.innerText;
        display.innerText = num1;
    } else if (event.target.classList.contains("number") && changeNum === true) {
        num2 += event.target.innerText;
        display.innerText = num2;
    }
    if (event.target.classList.contains("operator") && event.target.innerText !== "=") {
        changeNum = true;
        operator = event.target.innerText;
    }
    if (event.target.innerText === "=") {
        if (operator === "+") {
            let answer = parseInt(num1) + parseInt(num2);
            display.innerText = answer;
        } else if (operator === "-") {
            let answer = parseInt(num1) - parseInt(num2);
            display.innerText = answer;
        } else if (operator === "*") {
            let answer = parseInt(num1) * parseInt(num2);
            display.innerText = answer;
        } else if (operator === "/") {
            let answer = parseInt(num1) / parseInt(num2);
            display.innerText = answer;
        }
    }
});

/*-------------------------------- Functions --------------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });
  