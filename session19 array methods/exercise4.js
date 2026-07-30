const products = [
    {id:1, name: 'product1'},
    {id:2, name: 'product2'},
    {id:3, name: 'product3'},
]

const userChoice = prompt(`they are products: ${products.map(product => product.name).join(', ')}\n
if you want to remove product press r\nif you want to buy product press b`);

if (userChoice === 'r') {
    const numberRemove = +prompt('enter the number of products to remove');
    for (let i = 0; i < numberRemove; i++) {
        const productName = prompt('enter the product name');
        const wantRemoveProductIndex = products.findIndex(product => product.name === productName);
        if (wantRemoveProductIndex !== -1) {
            products.splice(wantRemoveProductIndex, 1);
        } else {
            alert('product not found');
        }
    }
    alert(`producs removed successfully\nthe rest of products ${products.map(product => product.name).join(', ')}`);
} else if (userChoice === 'b') {
    const numberBuy = +prompt('enter the number of products to buy');
    for (let i = 0; i < numberBuy; i++) {
        const productName = prompt('enter the product name');
        products.push({id: products.length + 1, name: productName});
    }
    alert(`product bought successfully\nthe rest of products ${products.map(product => product.name).join(', ')}`);
} else {
    alert('invalid choice');
}