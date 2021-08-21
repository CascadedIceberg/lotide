// this compares the arrays and checks if equal
function eqArrays (array1,array2){
  if(array1.length !== array2.length){
    return false;
  } 

  for(let i = 0; i < array1.length; i++ ){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
return true;
}



//the truthy falsy value is passed into here

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};



//checks the position of the array index

const middle = function (array) {
  let resultArray = [];
  // finds the middle position of array
  let mid = array.length / 2;
  //checks if empty array case returns an empty array
  if(array.length === 0){
    return array;
  }
  //checks if array is odd 
  if (array.length % 2 === 1) {
    mid = Math.floor(mid);
    resultArray.push(array[mid]);
  // checks if array is even
  } else {
    
    resultArray.push(array[mid - 1]);
    resultArray.push(array[mid])

  }

  return resultArray;
}
console.log(middle([]));

console.log(middle([1,2,3,4,5,6,7,8]));

//the array index is passed back up for verification


assertArraysEqual(middle([1,2,3,]), [2,3]);