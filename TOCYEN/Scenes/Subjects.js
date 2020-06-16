/*
  Subjects.js
  
  The subjects of each calculation.
*/

class Subjects {
  constructor() {
    this.options = [
      "Calculate",
      "Options"
    ];
    
    Scaler.TextSize(5);
    Aligner.AlignMode(enumPositions.CENTER);
    this.buttons = [
      
    ];
  }
  
  Render() {
    Aligner.AlignMode(enumPositions.CENTER);
    Scaler.TextSize(15);
    
    for(var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].Render();
    }
  }

}