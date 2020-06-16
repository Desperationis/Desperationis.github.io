/*
  Hitbox.js
  
  Deals with the creation and testing of hitboxes.
*/
class Hitbox {
  constructor() {
    
  }
  
  // Creates a hitbox based off text.
  static CreateTextHitbox(position, text) {
    // Assuming the text is centered by the center;
    // X, Y, width, height
    
    var hitbox = {
        x: position.x - textWidth(text) / 2,
        y: position.y - Scaler.currentScaledSize / 2,
        w: textWidth(text),
        h: Scaler.currentScaledSize
    };
    
    return hitbox;
  }
  
  // Test if a point is in a hitbox
  static PointInHitbox(pointPosition, hitbox) {
    return (pointPosition.x > hitbox.x && 
            pointPosition.x < hitbox.x + hitbox.w &&
            pointPosition.y > hitbox.y && 
            pointPosition.y < hitbox.y + hitbox.h);
  }
  
}