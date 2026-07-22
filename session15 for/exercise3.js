const totalNum = 5;
let sum = 0;
for (let i = 0; i < totalNum; i++) {
    sum += +prompt(`Enter the number ${i + 1}`);
}

alert(`The average is ${sum / totalNum}`);