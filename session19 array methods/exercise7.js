let word = prompt("enter the word");

if (word === word.split("").reverse().join("")) {
    alert("the word is a palindrome");
} else {
    alert("the word is not a palindrome");
}