//Create secretNumber
var secretNumber =4;
//ask user for guess
var guess =  prompt("Guess a number");
alert(guess);
//check if guess is right
if (Number(guess) ===  secretNumber){
  alert("You got it right");
}
//Otherwise, it is wrong
else if (Number(guess) > secretNumber) {
  alert("Too high, try again");
}
else if (Number(guess)<secretNumber){
  alert("Too low, try again");
}
else{
  alert("Not a valid number, try again");
}
