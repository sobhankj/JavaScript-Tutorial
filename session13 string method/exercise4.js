let URL = prompt("Enter a URL");
let protocol = URL.slice(0 , 5);

protocol === "https" ? alert("This is a https URL") : alert("This is a http URL");