const assertEqual = function(actual, expected) {
  if(actual === expected){
  
    console.log(`😄😄😄 --ASSERTION PASSED!--: ${actual} does equal ${expected}`);
  }else{
    console.log(`😟😟😟 --ASSERTION FAILED!--: ${actual} does NOT equal ${expected}`);
  }
  
 
 };



 const countLetters = function(string) {
  let cleanedString = string.split(" ").join('');
  let results = {};
  for (let letter of cleanedString) {
    results[letter] ? results[letter] += 1 : results[letter] = 1;
  }
  return results;
  
};

onst result1 = countLetters(string, { "Jason": false, "Karima": true, "Fang": true, "Agouhanna": true });
