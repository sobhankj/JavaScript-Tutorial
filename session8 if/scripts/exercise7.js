let userGrade = +prompt("Enter your grade");

if (isNaN(userGrade)) {
    alert("Invalid input");
} else {
    if (userGrade > 15) {
        console.log("You are A Grade");
    } else if (userGrade > 12) {
        console.log("You are B Grade");
    } else {
        console.log("You are C Grade");
    }
}