let users = [
    {id:1, username: 'sobhan', password: '123456', age: 19},
    {id:2, username: 'kaveh', password: '789012', age: 21},
    {id:3, username: 'ali', password: '456789', age: 22},
]

let inpUser = prompt('Enter your username');

let foundUser = users.find(user => user.username === inpUser);

if (foundUser) {
    console.log(`your password is: ${foundUser.password}`);
} else {
    console.log('username not found');
}