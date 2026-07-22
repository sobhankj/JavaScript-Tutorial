let num = +prompt('Enter a number');
let numOfDigits = 1;
let i= num;
while (i >= 10) {
    i /= 10;
    numOfDigits++;
}

alert(`The number of digits is ${numOfDigits}`);