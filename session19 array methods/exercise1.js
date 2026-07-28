let products = [
    {id:1, name: 'product1', price: 100, quantity: 3},
    {id:2, name: 'product2', price: 200, quantity: 2},
    {id:3, name: 'product3', price: 300, quantity: 1},
    {id:4, name: 'product4', price: 400, quantity: 4},
    {id:5, name: 'product5', price: 500, quantity: 5},
    {id:6, name: 'product6', price: 600, quantity: 6},
    {id:7, name: 'product7', price: 700, quantity: 7},
    {id:8, name: 'product8', price: 800, quantity: 8},
    {id:9, name: 'product9', price: 900, quantity: 9},
    {id:10, name: 'product10', price: 1000, quantity: 10},
]

let userBasket = [
    {id:1, name: 'product1', price: 100, quantity: 1},
    {id:2, name: 'product2', price: 200, quantity: 1},
    {id:3, name: 'product3', price: 300, quantity: 1},
]

const userWant = prompt('enter the product you want to buy');
const quantity = +prompt('enter the quantity you want to buy');

const isAvailable = products.some(product => product.name === userWant && product.quantity >= quantity);
if (isAvailable) {
    userBasket.push({id: userBasket.length + 1, name: product.name, price: product.price, quantity: quantity});
} else {
    alert('product is not available');
}

let totalPrice = 0;
userBasket.forEach(products => totalPrice += products.price * products.quantity);
console.log(totalPrice);
console.log(userBasket);
