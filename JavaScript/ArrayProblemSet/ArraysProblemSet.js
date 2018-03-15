console.log("connected");

//Reads in an array and prints it out backwards
function reverse(arr){
  for (var i = arr.length - 1; i>=0; i--){
    console.log(arr[i]);
  }
}
//Testing the reverse fuction
var reverseArray = [1,2,3,4];
console.log("Testing the reverse function \n");
reverse(reverseArray);


//This function reads in array and returns true if all the elements are the same
function isUniform(arr){
  var firstElement = arr[0];
  for (var i =0; i < arr.length; i++){
    if (arr[i] !== firstElement){
      return false;
    }
  }
  return true;
}

//Tests the isUniform fuction
var uniformTest1 = [1,1,1,1];
var uniformTest2 =["a",2,null];
console.log("Testing the isUniform function \n")
console.log(isUniform(uniformTest1));
console.log(isUniform(uniformTest2));

//Accepts in array of numbers and returns the sum of the array
function sumArray(arr) {
  var sum = 0;
  for (var i = 1; i < arr.length; i++) {
      sum += arr[i];
  //Can also be done with a foreach loop
  /*
  arr.forEach(funtion(element){
    sum+=element;
});
  */
    }
    return sum;
  }

//Testing sumArray
var sumArrayTest1 = [1,2,3];
var sumArrayTest2 = [1,4, 42, 5];
console.log("Testing sumArray \n");
console.log(sumArray(sumArrayTest1));
console.log(sumArray(sumArrayTest2));

//Returns the max element in an array of numbers
function max(arr){
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    maxElement = ((arr[i] > maxElement) ? arr[i] : maxElement);

  }
  return maxElement;
}

//Testing max
var maxTest1 = [1,2,3];
var maxTest2 = [1,4, 42, 5];
console.log("Testing max \n");
console.log(max(maxTest1));
console.log(max(maxTest2));
