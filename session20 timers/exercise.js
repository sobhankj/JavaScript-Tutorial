let second = prompt("enter the second");
let minute = prompt("enter the minute");

let timer = setInterval(() => {
    console.log(`${minute}:${second}`);
    second--;
    if (second < 0) {
        minute--;
        second = 59;
    }
    if (minute < 0) {
        clearInterval(timer);
    }
}, 1000);