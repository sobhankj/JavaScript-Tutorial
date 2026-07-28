const users = [
    {id:1, firstName: 'sobhan', lastName: 'kooshki', password: '123456', age: 19},
    {id:2, firstName: 'kaveh', lastName: 'kavehzadeh', password: '123456', age: 21},
    {id:3, firstName: 'ali', lastName: 'alizadeh', password: '123456', age: 22},
]

const isAllAdults = users.every(user => user.age >= 18);

console.log(isAllAdults ? 'all users are adults' : 'some users are not adults');
