/*
  Mouse.js
  
  A wrapper for the mouse; Provides aligned mouse position.
*/

class Mouse {
  constructor() {
    
  }
  
  static GetPosition() {
    var centeredMouse = createVector(mouseX - width / 2, mouseY - height / 2);
    var offset = Aligner.GetOffset();
    
    return centeredMouse;
  }
}