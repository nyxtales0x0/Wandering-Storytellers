// TODO
// -- fix current styling
// -- add start menu styling
// -- settings menu
// -- save load system
// -- game stats handling


import { gameManager } from "./engine/engine.js";
import { ui } from "./ui/ui.js";
import { tavernIntro } from "./chapters/chapter1/index.js";

gameManager.setfirstScene(tavernIntro.start);

console.log(gameManager.sceneTree);

ui.startMenu.init();
