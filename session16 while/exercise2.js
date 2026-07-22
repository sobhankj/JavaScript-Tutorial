let num = prompt('Enter a number');
let sum = 0;
let i = 0;

while (i < num.length) {
    sum += +num[i];
    i++;
}

console.log(sum);
