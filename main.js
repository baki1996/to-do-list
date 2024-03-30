import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in ur todos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you to add more in that?",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
