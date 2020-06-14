/*
  Aligner.js
  
  Aligns text, no matter the screen size!
*/

let enumPositions = {
  CENTER : 0,
  TOP : 1,
  BOTTOM : 2,
  LEFT : 3,
  RIGHT : 4
};

let currentEnum = enumPositions.CENTER;

function AlignMode(mode) {
  currentEnum = mode;
}

function AlignedText(strText, x, y) {
  switch(currentEnum) {
    case enumPositions.CENTER:
      text(strText, x, y);
      break;
    case enumPositions.TOP:
      text(strText, x, y - height / 2);
      break;
    case enumPositions.BOTTOM:
      text(strText, x, y + height / 2);
      break;
    case enumPositions.LEFT:
      text(strText, x - width / 2, y);
      break;
    case enumPositions.RIGHT:
      text(strText, x + width / 2, y);
      break;
  }
}






