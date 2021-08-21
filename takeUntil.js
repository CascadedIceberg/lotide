
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

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



const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
};

