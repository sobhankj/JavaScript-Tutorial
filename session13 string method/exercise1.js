let username = prompt("Enter your username");
let password = prompt("Enter your password");

if (username.length < 3 || password.length < 8) {
    alert("Username and password must be at least 3 characters long");
} else {
    alert("Username and password are valid");
}