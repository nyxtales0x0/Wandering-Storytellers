import { gameManager } from "./engine/engine.js";
import { ui } from "./ui/ui.js";
import { tavernIntro } from "./chapters/chapter1/index.js";

gameManager.setfirstScene(tavernIntro.start);

console.log(gameManager.sceneTree);

ui.startMenu.init();
