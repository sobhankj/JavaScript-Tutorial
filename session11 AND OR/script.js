let age = +prompt("Enter your age");
let gender = prompt("Enter your gender");

if (age < 18 || gender === "female") {
    alert("You are not eligible for the job");
} else {
    alert("You are eligible for the job");
}