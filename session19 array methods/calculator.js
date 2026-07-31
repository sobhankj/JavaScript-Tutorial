let numberA = prompt("enter the first number");
let numberB = prompt("enter the second number");
let operator = prompt("enter the operator");

switch (operator) {
    case "+":
        alert(`the result is ${numberA + numberB}`);
        break;
    case "-":
        alert(`the result is ${numberA - numberB}`);
        break;
    case "*":
        alert(`the result is ${numberA * numberB}`);
        break;
    case "/":
        alert(`the result is ${numberA / numberB}`);
        break;
}