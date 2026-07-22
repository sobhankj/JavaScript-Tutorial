let userDate = prompt("Enter your date of birth");
let currentDate = new Date();
let userBirthDate = new Date(userDate);
let age = currentDate.getFullYear() - userBirthDate.getFullYear();

alert(`Your age is ${age}`);