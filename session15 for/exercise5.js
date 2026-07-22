let usernum = prompt('Enter a number');
let sum = 0;

for (let i = 0; i < usernum.length; i++) {
    sum += +usernum[i];
}

alert(`The sum of the digits is ${sum}`);