let name = prompt("Enter your name" , "Sobhan Kooshki");
let age = +prompt("Enter your age" , 22);
let isStudent = confirm("Are you a student?");

alert(`Hello ${name}, you are ${age} years old and you are ${isStudent ? "a student" : "not a student"}`);