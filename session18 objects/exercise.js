let users = [
    {id:1, firstName: 'sobhan', lastName: 'kooshki', password: '123456'},
    {id:2, firstName: 'kaveh', lastName: 'kavehzadeh', password: '123456'},
    {id:3, firstName: 'ali', lastName: 'alizadeh', password: '123456'},
]

function signup(users, firstName, lastName, password) {
    const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        password,
    }
    users.push(newUser);
    return users;
}

const fname = prompt('enter your first name');
const lname = prompt('enter your last name');
const password = prompt('enter your password');

signup(users, fname, lname, password);
console.log(users);