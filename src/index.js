import { gameManager } from "./engine/engine.js";
import { tavernIntro } from "./chapters/chapter1/index.js";

gameManager.setfirstScene(tavernIntro.start)

gameManager.startGame();
