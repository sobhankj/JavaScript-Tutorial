const product = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let sumPrice = 0;
for (let i = 0; i < product.length; i++) {
    sumPrice += +prompt(`Enter the price of ${product[i]}`);
}
window.alert(`The total price is ${sumPrice}`);