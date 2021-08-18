// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log('😄 ' + actual + " does equal " + expected);
  } else {
    console.log('😥 ' + actual + " does not " + expected);
  }
};

// console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
console.assert(assertEqual(1, 1));
