let todoList = [];
let userOption;

while (true) {
    userOption = prompt("enter the option\n1 for add a todo\n2 for remove a todo\n3 for show all todos\n4 for complete a todo\n5 for exit");

    if (userOption === null) {
        break;
    }

    userOption = userOption.trim();

    if (userOption === "5") {
        alert("exiting...");
        break;
    }

    switch (userOption) {
        case "1":
            let todo = prompt("enter the todo");
            todoList.push({ name: todo, completed: false });
            alert("todo added successfully");
            break;
        case "2":
            let todoToRemove = prompt("enter the todo to remove");
            let todoIndexRemove = todoList.findIndex(todo => todo.name === todoToRemove);
            if (todoIndexRemove !== -1) {
                todoList.splice(todoIndexRemove, 1);
                alert("todo removed successfully");
            } else {
                alert("todo not found");
            }
            break;
        case "3":
            alert("the todos are:\n" + todoList.map((todo, index) => `${index + 1}. ${todo.name} ${todo.completed ? "[completed]" : "[not completed]"}`).join("\n"));
            break;
        case "4":
            let todoToComplete = prompt("enter the todo to complete");
            let todoIndexComplete = todoList.findIndex(todo => todo.name === todoToComplete);
            if (todoIndexComplete !== -1) {
                todoList[todoIndexComplete].completed = true;
                alert("todo completed successfully");
            } else {
                alert("todo not found");
            }
            break;
        default:
            alert("invalid option");
            break;
    }
}
