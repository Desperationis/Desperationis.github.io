/*
  Menu.js
  
  Deals with the menu scene.
*/

class Menu {
  constructor() {
    
    Scaler.TextSize(5);
    Aligner.AlignMode(enumPositions.CENTER);
    this.buttons = [];
    
    var calculate = new Button(createVector(0,0), "Calculate");
    calculate.AddListener(() => SceneManager.AdvanceToScene(1));
    
    this.buttons.push(calculate);
  }
  
  Render() {
    // Title text
    Aligner.AlignMode(enumPositions.TOP);
  
    
    Scaler.TextSize(15);
    Aligner.Text("TOCYEN", createVector(0, 100));
    
    Scaler.TextSize(3);
    Aligner.Text("The Only Calculator You'll Ever Need!",   
                        Aligner.GetNextPosition());
  
    
    for(var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].Render();
    }
    
  }

}