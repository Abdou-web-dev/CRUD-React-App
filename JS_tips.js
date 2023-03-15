// how to compare 2 arrays in JS :

//Really, this shouldn't be difficult, as you'd think we could easily use either the loose equality (double equals - ==) or the strict equality (triple equals - ===). But unfortunately, you cannot use them in this case.
//This happens because JavaScript arrays have a type of Object:

//Objects are not compared based on their values but based on the references of the variables:

const compareArrays = (array1, array2) => {
  let isArraysEqual = JSON.stringify(array1) === JSON.stringify(array2);
  // return a.toString() === b.toString();
  return isArraysEqual;
};

let arr1 = [11, 22, 33];
let arr2 = [11, 22, 33];

//
let arr3 = [11, 22, 100];
let arr4 = [0, 5, 33];

console.log(compareArrays(arr1, arr2), compareArrays(arr3, arr4)); //true, false
//The methods above fall short in some scenarios. For example, when one array has a value of null and another has a value of undefined, when we use the strict comparison, we get false by default – which is correct:
//And when we have null and undefined as part of our Array elements, it will be able to detect that they are not the same:
//How to Compare Two Arrays by Lopping Through Their Values
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

const compareArraysLoop = (arr_1, arr_2) => {
  let condition_1 = arr_1.length === arr_2.length;
  let condition_2 = arr_1.every((element, index) => element === arr_2[index]);
  let areEquals = condition_1 && condition_2; //Boolean
  return areEquals;
};

let array1 = [11, 22, 33];
let array2 = [21, 22, 23];
let array3 = [11, 22, 33];
let array4 = [11, null, 33];
// let array2 = [21, 22, 23];
let array5 = [11, undefined, 33];

console.log(compareArraysLoop(array1, array2)); //false
console.log(compareArraysLoop(array1, array3)); //true

//Method 3: using a for loop
// The every() method has a better syntax. Still, another way we can implement the method is to use other iteration methods like the for loop, forEach() or map() alongside if statements. These can be easier for a newbie to grasp.

const compareArraysWithFor = (a, b) => {
  if (a.length !== b.length) return false;
  else {
    // Comparing each element of your array
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

let arra1 = [21, null, 33];
let arra2 = [21, 22, 23];
let arra3 = [21, undefined, 33];
let arra4 = [21, 22, 23];

console.log(compareArraysWithFor(arra1, arra2)); //false
console.log(compareArraysWithFor(arra1, arra3)); //false
console.log(compareArraysWithFor(arra2, arra4)); //true
