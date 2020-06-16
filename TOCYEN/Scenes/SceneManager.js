/*
  SceneManager.js
  
  Deals with switching scenes.
*/

class SceneManager {
 static constructor() {
    this.currentScene = 0;
    this.sceneID = 0;
    this.scenes = {};
  }
  
  static AdvanceToScene(sceneID) {
    this.currentScene = sceneID;
  }
  
  static AddScene(scene) {
    this.scenes[this.sceneID] = scene;
    this.sceneID++;
  }
  
  static Render() {
      this.scenes[this.currentScene].Render();
  }
}