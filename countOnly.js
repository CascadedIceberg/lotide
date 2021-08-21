
const assertEqual = function(actual, expected) {
  if(actual === expected){
  
    console.log(`😄😄😄 --ASSERTION PASSED!--: ${actual} does equal ${expected}`);
  }else{
    console.log(`😟😟😟 --ASSERTION FAILED!--: ${actual} does NOT equal ${expected}`);
  }
  
 
 };
 
 
 const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
  
    if (itemsToCount[item]) {
      !results[item] ? results[item] = 1 : results[item] += 1;
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true, "Agouhanna": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], 2);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], 2);