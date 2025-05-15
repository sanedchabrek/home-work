//Exercises
//Basic Requirements
//1. Use filter to write the following functions:
function filter(array, testFunction) {
  var acc = [];
  each(array, function(element) {
    if (testFunction(element)) {
      acc.push(element);
    }
  });
  return acc;
}
function each(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}
 function evens(arrayOFnumber){
    return filter(arrayOFnumber,function(element){
        if(element%2===0){
            return true}
        return false
        })
    }
//  Write a function called multiplesOfThree that takes an array of numbers as a parameter, and returns an array of only the numbers that are multiples of three. 
 function multiplesOfThree(arrayOFnumber){
    return filter(arrayOFnumber,function(element){
        if(element%3===0){
            return true}
        return false
        })
    }
//  Write a function called positives that takes an array of numbers as a parameter, and returns an array of only the numbers that are positive.
 function positives(arrayOFnumber){
    return filter(arrayOFnumber,function(element){
        if(element>0){
            return true}
        return false}
    )
}
// Write a function called evenLength that takes an array of strings and returns an array of only the strings with an even length.
 function evenLength(arrayOFstring){
    return filter(arrayOFstring,function(element){
        if(element.length%2===0){
            return true}
        return false}
    )
}
//More Practice
//1. Use filter to write the following functions:
//odds: Accepts an array of numbers, and returns the odd ones.
 function odd(arrayOFnumber){
    return filter(arrayOFnumber,function(element){
        return !(element%2===0)})
 }
 // negatives: Like positives, but with negatives!
  function negatives(arrayOFnumber){
    return filter(arrayOFnumber,function(element){
        return (element<0)}
    )
}
//largerThanSix: given an array of numbers, returns those larger than 6.
  function largerThanSix(arrayOFnumber){
    return filter(arrayOFnumber,function(element){
        return (element>6)}
    )
}
//2. Using filter, write a function startsWithChar that accepts two parameters: an array of strings, and a character (e.g. 'a'), and returns an array of only the strings that start with that character
 function startsWithChar(strings, character) { 
    return filter(strings,function(element){
        return (element[0]===character)}
    )
 } 
 //3. Extend the filter function to pass the index of each element to the predicate; then, complete the following: Write a function called evenIndexedEvenLengths (yeah, a bit of a mouthful) that accepts an array of strings as a parameter, and returns only the strings that are found at an even index that also have an even length, e.g.:
 function filter(array, testFunction) {
  var acc = []
  each(array, function(element,i) {
    if (testFunction(element,i)) {
      acc.push(element);
    }
  });
  return acc
}
function each(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i],i)
  }
}
function evenIndexedEvenLengths(strings){
    return filter(strings,function(element,i){
        return (element.length%2===0&&i%2===0)
    })
}
//4. Write a version of filter that works on arrays and objects; then, use your updated version of filter to filter an object with values of mixed types to an object with only numeric values. You should be able to use your modified version of filter as follows:
 function filter(object, testFunction) {
  var acc = {}
  each(object, function(element,key) {
    if (testFunction(element,key)) {
      object[key]=element
    }
  });
  return acc
}
function each(object, action) {
  for (let key in object) {
    action(object[key],key)
  }
}
function filtrage(object){
    return filter(object,function(valueOfkey,key){
        return (typeof(object[key])==="number")
    })
}
//5. Write function called moveZero that accepts an array of numbers as a paramerter and returns an array of numbers with all the zero values moved to the end 'using filter'
function moveZero(numbers) {
    const nonZeros = numbers.filter(function(num) {
        return num !== 0
    })
    const zeros = numbers.filter(function(num) {
        return num === 0
    })
    return nonZeros.concat(zeros)
}
//6. Write function called strongPasswords that accepts an array of object representing usersData (email, password) and retrun an array of objects with the strong Password only using filter. Note: Strong password is comnied of : - capital letters - small letters - numbers - sumbols - at least 8 characters long
function strongPasswords(array) {
  return array.filter(function(obj) {
    const password = obj.user.password

    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSymbol = /[^A-Za-z0-9]/.test(password)
    const isLongEnough = password.length >= 8

    return hasUppercase && hasLowercase && hasNumber && hasSymbol && isLongEnough
  })
}