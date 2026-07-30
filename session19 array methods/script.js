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

users.some(user => {
    return user.firstName === 'sobhan';
})

users.some(function(user) {
    return user.firstName === 'sobhan';
})

users.every(user => user.age >= 18);

users.every(function(user) {
    return user.age >= 18;
})

users.find(user => {
    return user.firstName === 'sobhan';
});

users.find(function(user) {
    return user.firstName === 'sobhan';
});

users.findIndex(user => {
    return user.firstName === 'sobhan';
});

users.findIndex(function(user) {
    return user.firstName === 'sobhan';
});