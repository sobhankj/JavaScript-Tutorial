let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let random = 0;
let capcha = "";

for (let i = 0; i < 4; i++) {
    random = Math.floor(Math.random() * 2);
    if (random === 0) {
        capcha += numbers[Math.floor(Math.random() * numbers.length)];
    } else {
        capcha += letters[Math.floor(Math.random() * letters.length)];
    }
}

alert(capcha);


let numbers = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let capcha = "";
for (let i = 0; i < 4; i++) {
    capcha += numbers[Math.floor(Math.random() * numbers.length)];
}

alert(capcha);