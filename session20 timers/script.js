let i = 0;
let end = 10;

let timer = setInterval((data , endTime) => {
    console.log(`${data} of ${endTime}`);
    i++;
    if (i === end) {
        clearInterval(timer);
    }
}, 1000, i, end);


let timer2 = setTimeout(() => {
    console.log("Hello World");
}, 1000);

clearTimeout(timer2);