/*
  HelperFunctions.js
  
  Helper functions!
*/

// Returns the closest multiple based off a floor value.
function FloorMultiple(base, multiple) {
  return floor(base / multiple) * multiple;
}

// Checks if a single array element is equal to a variable.
function AdvancedOR(variable, array) {
  for(var i = 0; i < array.length; i++) {
    if(variable == array[i]) {
      return true;
    }
  }
  return false;
}