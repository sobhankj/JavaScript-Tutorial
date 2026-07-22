let sentece = prompt("Enter a sentence");
let word = prompt("Enter a word");

if (sentece.includes(word)) {
    alert("The word is in the sentence");
} else {
    alert("The word is not in the sentence");
}

if (sentece.search(word) !== -1) {
    alert("The word is in the sentence");
} else {
    alert("The word is not in the sentence");
}

if (sentece.indexOf(word) !== -1) {
    alert("The word is in the sentence");
} else {
    alert("The word is not in the sentence");
}