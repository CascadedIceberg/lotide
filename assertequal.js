// const sum = function(a, b) { 
//   return a + b;
// }

// // TEST CODE
//  console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 1) === 3);




const assertEqual = function(actual, expected) {
 if(actual === expected){
   console.log()
   //left blank cause assertions do not log anything if truthy other code would be --> (code below)
   // console.log("😄😄😄 --ASSERTION PASSED!--:" + actual + " does equal " + expected);
 }else{
   console.log("😟😟😟 --ASSERTION FAILED!--:" + actual + " does NOT equal " + expected);
 }
 

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
//  assertEqual(1, 1);


