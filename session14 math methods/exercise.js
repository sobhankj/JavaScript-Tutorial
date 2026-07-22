const capcha = Math.floor(Math.random() * 1000000);
const userCapcha = +prompt(`Enter the capcha: ${capcha}`);
if (userCapcha === capcha) {
    alert("Capcha is correct");
} else {
    alert("Capcha is incorrect");
}