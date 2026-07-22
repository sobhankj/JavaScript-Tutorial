let numStart = +prompt('Enter a number');
let numEnd = +prompt('Enter a number');

if (numStart > numEnd) {
    [numStart, numEnd] = [numEnd, numStart];
}

let i = (numStart % 2 === 0) ? numStart : numStart + 1;
while (i <= numEnd) {
    console.log(i);
    i += 2;
}