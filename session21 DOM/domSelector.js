const h1Elements = document.getElementsByTagName("h1");
console.log(h1Elements);

const pElements = document.getElementsByTagName("p");
console.log(pElements);

const h2Element = document.getElementById("heading2");
console.log(h2Element);

const listElement = document.getElementById("list");
console.log(listElement);

const itemElements = document.getElementsByClassName("item");
console.log(itemElements);

const h1Elem = document.querySelector("h1");
console.log(h1Elem);

const itemElems = document.querySelectorAll(".item");
console.log(itemElems);

h1Elem.innerHTML = "Hello World";
h1Elem.style.color = "red";

itemElems.forEach(item => {
    item.setAttribute("style", "color: blue; font-size: 20px;");
});