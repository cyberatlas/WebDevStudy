var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");


while (input !== "quit"){
  //handle input
  if (input === "list"){
    listTodos();
  }
  else if (input === "new"){
    addTodo();
    }
  else if (input === "delete"){
    deleteTodo();
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
  console.log("*****");
  todos.forEach(function(todo, index){
  console.log(index + ": " + todo);
  });
  console.log("*****");
}

function addTodo(){
  //Ask the user for a new todo
  var newTodo = prompt("Enter new todo");
  //add it to the todos array
  todos.push(newTodo);
  console.log(newTodo + " added to list")
}

function deleteTodo(){
  //ask for index of item to Delete
  //delete that todo
  var index = prompt("Enter the index of a todo to delete");
  todos.splice(index, 1);
  console.log("Deleted todo")
}
