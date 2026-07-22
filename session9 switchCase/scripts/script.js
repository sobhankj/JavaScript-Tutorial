let userAge = +prompt("Enter your age" , 1);

switch (true) {
    case userAge >= 70:
        alert("You are a senior citizen");
        break;

    case userAge >= 50:
        alert("You are a middle aged");
        break;
    
    case userAge >= 18:
        alert("You are an adult");
        break;
    
    default:
        alert("You are a child");
        break;
}