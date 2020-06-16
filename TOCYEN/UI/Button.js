/*
  Button.js
  
  Creates a clickable button on screen.
*/
class Button {
  constructor(position, text) {
    this.text = {
      content: text,
      size: Scaler.currentScaledSize,
      alignment: Aligner.currentEnum
    };
    
    this.hue = 255;
    this.hoverHue = 155;
    this.listeners = [];
    this.hitbox = Hitbox.CreateTextHitbox(position, text);
    this.position = position;
  }
  
  AddListener(listener) {
    this.listeners.push(listener);
  }
  
  Render() {
    // See if mouse hits hitbox of text
    var mousePosition = Mouse.GetPosition();

    if(Hitbox.PointInHitbox(mousePosition, this.hitbox)) {
      fill(this.hoverHue);
      
      if(mouseIsPressed) {
        for(var i = 0; i < this.listeners.length; i++) {
          this.listeners[i]();
        }
      }
      
    }
    
    textSize(this.text.size);
    Aligner.AlignMode(this.text.alignment);
    Aligner.Text(this.text.content, this.position);
    fill(this.hue)
  }
  
  
}