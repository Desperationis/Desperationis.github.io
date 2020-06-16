/*
  Scaler.js
  
  Sets and gives scaled text sizes based on screen size.
*/

class Scaler {
  static constructor() {
    this.lastScaledSize = 0;
    this.currentScaledSize = 0;
  }
  
  // Get the scaled text size to the nearest 8px multiple.
  static GetTextSize(size) {
    return FloorMultiple((size / 100) * width, 8);
  }
  
  // Set the size of text based on screen width
  static TextSize(size) {
    this.lastScaledSize = this.currentScaledSize;
    this.currentScaledSize = this.GetTextSize(size);
    
    // Make very first scale the last scaled size
    if(this.lastScaledSize <= 0) {
      this.lastScaledSize = this.currentScaledSize;
    }
    
    textSize(this.currentScaledSize);
  }
  
}