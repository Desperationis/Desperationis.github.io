/*
  HelperFunctions.js
  
  Helper functions!
*/

function TextSize(size) {
  // Set the size of text based on screen
  // 100px is screen width

  textSize(floor((size / 100) * width));
}