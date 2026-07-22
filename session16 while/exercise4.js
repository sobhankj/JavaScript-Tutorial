let sum = 0;
while (true) {
    let num = +prompt('Enter a number');
    if (num === 0) {
        break;
    }
    sum += num;
}

alert(`The sum is ${sum}`);