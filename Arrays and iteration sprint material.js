//Basic Requirments
// 1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop and prints all elements of the array in the console using console.log
function arrayFor(array) {
    for (i=0;i<array.length;i=i+1)
        console.log(array[i])
}
//2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log
function arrayWhile(array){
    var i=0;
    while (i<array.length){
    console.log(array[i])
    i=i+1
}
}
//3.Write a function called sum that takes an array of numbers as a parameter and returns the sum of the numbers in the array
function sum(array) {
    var result=0
    for (i=0;i<array.length;i=i+1){
       result=result+array [i]
}
return result
}
//4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.
function sum(array) {
    var result=0
    for (i=0;i<array.length;i=i+2){
       result=result+array [i]
}
return result
}
//5.Write a function called sumStartAt that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the inputted index, until the end of the array.
function sumUntil(array, index) {
    
  } function sumStartAt(array,index) {
    var result=0
    for (i=index;i<array.length;i=i+1){
       result=result+array [i]
}
return result
}
//6.Write a function called sumUntil that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the index 0, until the index parameter.

function sumUntil(array,index) {
  var result=0
  for (i=index;i<+index.length;i=i+1){
     result=result+array [i]
}
return result
}
//7.Write a function called subtractReverse that takes an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element of the input array (in reverse).
function subtractReverse (array){
    var result=0
    for (i=array.length-1;i=>0;i=i-1){
        result=result-array [i]
    }
    return result
}