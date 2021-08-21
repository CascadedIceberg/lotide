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



const assertEqual = function(actual, expected) {
  if(actual === expected){
  
    console.log(`😄😄😄 --ASSERTION PASSED!--: ${actual} does equal ${expected}`);
  }else{
    console.log(`😟😟😟 --ASSERTION FAILED!--: ${actual} does NOT equal ${expected}`);
  }
  
 
 };
 
//  const eqObjects = function(object1, object2) {
//    if(Object.keys(object1).length !== Object.keys(object2).length) {
//      return false;
//    }

//    for (let key in object1) {
//      if (Array)
//    }
// };


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if ((typeof(object1[key]) !== typeof({}) && typeof(object2[key]) !== typeof({})) && (object1[key] !== object2[key])) {
      return false;
    } else if ((typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) && eqObjects(object1[key], object2[key]) === false) {
      return false;
    } else if (typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) {
      eqObjects(object1[key], object2[key]);
    }
  }
  return true;
};










const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc)