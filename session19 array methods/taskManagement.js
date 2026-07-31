let worker = [
    {id: 1, name: "John", tasks: [] },
    {id: 2, name: "Jane", tasks: [] },
    {id: 3, name: "Jim", tasks: [] },
]

while (true) {
    let managerTask = prompt("enter the task");
    let managerWorker = prompt("enter the worker name");
    let managerWorkerId = worker.findIndex(worker => worker.name === managerWorker);
    if (managerWorkerId !== -1) {
        worker[managerWorkerId].tasks.push(managerTask);
        alert("task added successfully");
    } else {
        alert("worker not found");
    }
}