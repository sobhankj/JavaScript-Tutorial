let usernum = +prompt('Enter a number');

let numOfDigits = 1;

for (let i = usernum; i >= 10; i/=10) {    
    numOfDigits++;
}
alert(`The number of digits is ${numOfDigits}`);