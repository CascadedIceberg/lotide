const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log()

    console.log(`😄😄😄 --ASSERTION PASSED!--: ${actual} does equal ${expected}`);
  } else {
    console.log(`😟😟😟 --ASSERTION FAILED!--: ${actual} does NOT equal ${expected}`);
  }


};
const tail = function (array) {
  return array.slice(1);
};

module.exports = tail;


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

