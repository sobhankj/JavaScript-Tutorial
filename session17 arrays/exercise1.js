let numbers = [];

while (true) {
    let number = +prompt('Enter a number:');
    if (number === null || number === '' || isNaN(number)) {
        break;
    }
    numbers.push(number);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert(`The sum of the numbers is ${sum}`);
alert(`The average of the numbers is ${sum / numbers.length}`);