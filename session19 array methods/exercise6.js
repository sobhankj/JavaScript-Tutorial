const producs = [
    { name: "apple", price: 1000 },
    { name: "banana", price: 2000 },
    { name: "cherry", price: 3000 },
    { name: "date", price: 4000 },
    { name: "elderberry", price: 5000 },
    { name: "fig", price: 6000 },
    { name: "grape", price: 7000 },
    { name: "lemon", price: 8000 },
    { name: "lime", price: 9000 },
    { name: "orange", price: 10000 },
]

let totalPrice = 0;

products.forEach(product => {
    if (product.price > 5000) {
        totalPrice += product.price;
    } else {
        totalPrice += product.price + 100;
    }
});

const mappedProducts = products.map(product => {
    if (product.price > 5000) {
        return product.price;
    } else {
        return product.price + 100;
    }
});

alert(`the total price is: ${Math(sum(mappedProducts))}`);