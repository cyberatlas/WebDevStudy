//Create secretNumber
var secretNumber =4;
//ask user for guess
var guess = Number( prompt("Guess a number"));
alert(guess);
//check if guess is right
if (guess ===  secretNumber){
  alert("You got it right");
  keep = false;
}
//Otherwise, it is wrong
else if (guess > secretNumber) {
  alert("Too high, try again");
}
else if (guess < secretNumber){
  alert("Too low, try again");
}
else{
  alert("Not a valid number, try again");
}
