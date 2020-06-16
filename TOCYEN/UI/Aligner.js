/*
  Aligner.js
  
  Aligns text based on points, no matter the screen size!
*/

// Enumeration for canvas position.
let enumPositions = {
  CENTER : 0,
  TOP : 1,
  BOTTOM : 2,
  LEFT : 3,
  RIGHT : 4,
  TOPLEFT : 5,
  TOPRIGHT : 6,
  BOTTOMLEFT : 7,
  BOTTOMRIGHT : 8,
};

// Convience arrays.
let TOP = [enumPositions.TOP, 
               enumPositions.TOPLEFT, 
               enumPositions.TOPRIGHT];
    
let BOTTOM = [enumPositions.BOTTOM, 
              enumPositions.BOTTOMLEFT, 
              enumPositions.BOTTOMRIGHT];
    
let LEFT = [enumPositions.LEFT, 
            enumPositions.BOTTOMLEFT, 
            enumPositions.TOPLEFT];
    
let RIGHT = [enumPositions.RIGHT, 
             enumPositions.BOTTOMRIGHT, 
             enumPositions.TOPRIGHT];


class Aligner {
   static constructor() {
     this.currentEnum = enumPositions.CENTER;
     this.lastTextInfo = {
       position: new p5.Vector(0,0),
       scaledSize: 0
     };
   }
  
  // Set the current align mode.
  static AlignMode(mode) {
    this.currentEnum = mode;
  }
  
  // Get the current offset of the aligner.
  static GetOffset() {
    var offsetX = 0;
    var offsetY = 0;
    
    if(AdvancedOR(this.currentEnum, TOP)) {
      offsetY = -height / 2;
    }
    if(AdvancedOR(this.currentEnum, BOTTOM)) {
      offsetY = height / 2;
    }
    if(AdvancedOR(this.currentEnum, LEFT)) {
      offsetX = -width / 2;
    }
    if(AdvancedOR(this.currentEnum, RIGHT)) {
      offsetX = width / 2;
    }
    
    return createVector(offsetX, offsetY);
    
  }
  
  // Make text based off current align mode.
  static Text(strText, position) {
    var offset = this.GetOffset();

    text(strText, position.x + offset.x, position.y + offset.y);
    
    this.lastTextInfo.position = position;
    this.lastTextInfo.scaledSize = Scaler.currentScaledSize;
  }

  // Get the position of the next aligned text
  static GetNextPosition(padding = 0) {
    let lastPosition = this.lastTextInfo.position;
    let currentHalfHeight = Scaler.currentScaledSize / 2;
    let pastHalfHeight = (this.lastTextInfo.scaledSize / 2) + padding;
  
    lastPosition.y += pastHalfHeight + currentHalfHeight;
    
    return lastPosition;
  }
}







