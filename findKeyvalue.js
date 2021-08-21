const assertEqual = function(actual, expected) {
  if(actual === expected){
  
    console.log(`😄😄😄 --ASSERTION PASSED!--: ${actual} does equal ${expected}`);
  }else{
    console.log(`😟😟😟 --ASSERTION FAILED!--: ${actual} does NOT equal ${expected}`);
  }
  
 
 };

 const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (value === object[key]) {
      return key;
    }
  }
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");