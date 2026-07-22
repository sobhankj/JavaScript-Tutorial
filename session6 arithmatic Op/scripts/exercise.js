let price = +prompt("Enter the price of the product" , 0);
let discount = +prompt("Enter the discount of the product" , 0);
let discountPrice = price - (price * discount / 100);
alert(`The discount price of the product is ${discountPrice}`);