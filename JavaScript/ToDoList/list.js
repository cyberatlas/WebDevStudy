var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");


while (input !== "quit"){
  //handle input
  if (input === "list"){
    console.log(todos);
  }
  else if (input === "new"){
    //Ask the user for a new todo
    var newTodo = prompt("Enter new todo");
    //add it to the todos array
    todos.push(newTodo);
    }

  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP")
