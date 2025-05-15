//High order Functions
function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  
  function fy(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
//EXERCISES 
//Solve the following functions using High Order Functions:
// write a function called addOne that takes an array of numbers as an input,
  // and returns a new array with all array elements incremented by one as an output
  // addOne( [1,2,3,4] ) ==> [2,3,4,5]
  // addOne( [3,6,9] ) ==> [4,7,10]
  
  // Note: using MAP
  function addOne(array) {
    return array.map(num=>num +1)
  }
 
///*****************************  2  ***********************/
    // Take an array and remove every second element out of that array.
  // Always keep the first element and start removing with the next element.
  // Example:
  // myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
  // Sample output: removeEveryOther([1, 12, 3, 44, 10, 6, 17]) => [1, 3, 10, 17]
  // None of the arrays will be empty, so you don't have to worry about that!
  
  // Note: using FILTER
  function removeEveryOther(array) {
    return array.filter((-,index)=>index%2===0)
  }
// use map to write the following functions
  
  function doubleAll(nums) {
    return nums.map(num=>num*2)
    
  }
  function squareAll(nums) {
    return nums.map(num=>num*num)

  }
  function stringLengths(array) {
 return array.map(str=>str.length)
  }
/*****************************  4  ***********************/
// use filter to write the following functions
  
  function odds(nums) {
  return nums.filter(num=>num%2!==0)
  }
  function positives(nums) {
   return nums.filter(num=>num>0)
  }
  function negatives(nums) {
   return nums.filter(num=>num<0)
  }
  function evenLength(nums) {
    return nums.filter(num=>num.Sting().length%2===0)
  }
  function largerThanSix(nums) {
    return nums.filter(num=>num>6)
  }

  /*****************************  5 ***********************/


  // Write a function called map2 that accepts two arrays and a function as arguments, and constructs
  // a new array by invoking its function argument on the elements of both arrays, 
  
  //  map2([1, 2, 3], [4, 5, 6], function(a, b) {
  //        return a * b;
  //  });
  //  => [4, 10, 18]
  
  function map2(arr1, arr2, callback) {
    const result=[]
    const length=Math.min(arr1.length,arr2.length)
    for (let i=0; i<length;i++){
        result.push(callback(arr1[i],arr2[i]))

    }
return result
    }



  /*****************************  6***********************

//we have an array of students :
//var students = [
//{ name: "Alice", grade: 90, teacherNotes: "Excellent work", level: "A" },
//{ name: "Bob", grade: 80, teacherNotes: "Good effort", level: "B" },
//{ name: "Charlie", grade: 95, teacherNotes: "Impressive performance", level: "A+" },
//{ name: "Dave", grade: 75, teacherNotes: "Needs improvement", level: "C" }];

var highGradeStudents = students.filter(student => student.grade >= 90);
console.log("High Grade Students:", highGradeStudents)
 
  
 var aPlusLevelStudents=students.map(student=>student.level===A+);
 console.log(gradesArray)

 var gradesArray=students.map(student=>student.grade);
 console.log(gradesArray)

 var highestGrade=Math.max(... students.map(student=>student.grade))


 var topStudent=student.filter(student.grade===highesGrade);
 console.log(topStudent)

  /*****************************  7 ***********************/
//you have an array of customer's products :
var customerProducts = [
  {
    productName: "iPhone 13",
    productPrice: 1099.99,
    productQuantity: 2,
    productCategory: "Electronics"
  },
  {
    productName: "Leather Jacket",
    productPrice: 299.99,
    productQuantity: 1,
    productCategory: "Clothing"
  },
  {
    productName: "Bluetooth Speaker",
    productPrice: 79.99,
    productQuantity: 3,
    productCategory: "Electronics"
  },
  {
    productName: "Running Shoes",
    productPrice: 129.99,
    productQuantity: 1,
    productCategory: "Shoes"
  }
];
1*
function productList(array){
  return array.map(product=>product.productName)
}
2*
function electronicProducts(array){
  return array
  filter(product=>product.productCategory==="electronics")
  map(product=>product.productName)
}
3*
function totalToPay(array){
  return array.reduce((total,product)=>{
    return total+(product.productPrice*product.productQuantity)
  },0)
}
4*function productYouCanbuy(amount,array){
  return arrayfilter(product=>product.productPrice>=amount)
  map (product=>product.productName0)
}
5*
function productQuantity(array){
  return array.reduce((acc,product)=>{
    const category=product.productCategory
    if(!acc[category]){
      acc[category]=0
    }
    acc[category]+=product.productQuantity
    return acc
  }{})
}
6*
function totalPriceCategory(category,array){
  return array.reduce((acc,product)=>{
    if (product.productCategory===category){
      acc.productQuantity+=product.productQuantity
      acc.totalCost+=product.productPrice*product.productQuantity
    }
    return acc
  }{totalQuantity:0,totalCost:0})
}
//************************8*****************************

//var users = [
//{ name: "John", age: 25, gender: "male", occupation: "developer", hobbies: ["reading", "gaming", "hiking"] },
//{ name: "Jane", age: 32, gender: "female", occupation: "teacher", hobbies: ["photography", "painting", "travelling"] },
//{ name: "Bob", age: 42, gender: "male", occupation: "engineer", hobbies: ["cycling", "swimming", "cooking"] },
//{ name: "Alice", age: 28, gender: "female", occupation: "doctor", hobbies: ["yoga", "running", "dancing"] }
//]

//Write a function listNames that takes an array of users and returns an array of their names in alphabetical order.
function ListNames(users){
  return users
  map(users=>users.name)
  scrollTo()
}
//Write a function filterByGender that takes an array of users and a gender and returns an array of users that match the gender.
function filterByGender(users,gender){
  return users.filter(user=>user.gender===getComputedStylender)
}
//Write a function groupByAge that takes an array of users and groups them by their age. The function should return an object where each key is an age and the value is an array of users with that age.
function groupByAge(users){
  return users.reduce((acc,users)=>{
    if(!acc[user.age]){
      acc[user.age]=[]
    }
    acc[user.age].push(user)
    return acc
  }{})
}
//Write a function mostCommonHobby that takes an array of users and returns the most common hobby among them.
function mostCommonHobby(users) {
  const hobbyCount = {};

  users.forEach(user => {
    user.hobbies.forEach(hobby => {
      hobbyCount[hobby] = (hobbyCount[hobby] || 0) + 1;
    });
  });

  let maxHobby = "";
  let maxCount = 0;

  for (let hobby in hobbyCount) {
    if (hobbyCount[hobby] > maxCount) {
      maxCount = hobbyCount[hobby];
      maxHobby = hobby;
    }
  }

  return maxHobby;
}
//Write a function filterByHobby that takes an array of users and a hobby and returns an array of users that have the hobby.
function filterByHobby(users,hobby){
  return users.filter(users=>users.hobbies.includes(hobby))
}
//Write a function groupByOccupation that takes an array of users and groups them by their occupation. The function should return an object where each key is an occupation and the value is an array of users with that occupation.
function groupByOccupation(users){
  return users.reduce(acc,users)
  if (!acc[users.occupation])=[]
}
acc[user.occupation].push(user)
return acc


//Write a function averageAgeByOccupation that takes an array of users and returns an object where each key is an occupation and the value is the average age of users with that occupation. Round the average age to the nearest integer.
function averageAgeByOccupation(users) {
  const groups = {};

  users.forEach(user => {
    const occ = user.occupation;
    if (!groups[occ]) {
      groups[occ] = { totalAge: 0, count: 0 };
    }
    groups[occ].totalAge += user.age;
    groups[occ].count++;
  });

  const averages = {};

  for (let occ in groups) {
    averages[occ] = Math.round(groups[occ].totalAge / groups[occ].count);
  }

  return averages;
}