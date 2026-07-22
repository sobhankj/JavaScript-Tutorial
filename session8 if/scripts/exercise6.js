let minutes = +prompt("Enter the minutes");
let hour = Math.floor(minutes / 60);
let moduleMinutes = minutes % 60;

alert(`${hour} hours and ${moduleMinutes} minutes`);