let users = [
    {id:1, firstName: 'sobhan', lastName: 'kooshki', password: '123456', age: 19},
    {id:2, firstName: 'kaveh', lastName: 'kavehzadeh', password: '123456', age: 21},
    {id:3, firstName: 'ali', lastName: 'alizadeh', password: '123456', age: 22},
]

users.forEach(user => {
    console.log(user);
})

users.forEach(function(user) {
    console.log(user);
})

let isAvailable = users.some(user => {
    return user.firstName === 'sobhan';
})

let isAvailable2 = users.some(function(user) {
    return user.firstName === 'sobhan';
})

let isAvailableInAll = users.every(user => user.age >= 18);

let isAvailableInAll2 = users.every(function(user) {
    return user.age >= 18;
})

let findedUser = users.find(user => {
    return user.firstName === 'sobhan';
});

let findedUser2 = users.find(function(user) {
    return user.firstName === 'sobhan';
});

let findedUserIndex = users.findIndex(user => {
    return user.firstName === 'sobhan';
});

let findedUserIndex2 = users.findIndex(function(user) {
    return user.firstName === 'sobhan';
});

let filteredUsers = users.filter(user => {
    return user.age > 19;
});

let filteredUsers2 = users.filter(function(user) {
    return user.age > 19;
});

let mappedUsers = users.map(user => {
    user.age += 2;
    return user;
});

let mappedUsers2 = users.map(function(user) {
    user.age += 2;
    return user;
});