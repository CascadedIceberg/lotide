const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log()
  
    console.log(`😄😄😄 --ASSERTION PASSED!--: ${actual} does equal ${expected}`);
  }else{
    console.log(`😟😟😟 --ASSERTION FAILED!--: ${actual} does NOT equal ${expected}`);
  }
  
 
 };
 const head = function(array) {
  return array[0];
};

module.exports = head;

 assertEqual(head([1, 4 ,5,"Lighthouse Labs"], ["Bootcamp",55 , 5 , 4 ]));

