import { gameManager } from "../engine/engine.js";

const startMenu = {
    init() {
        const startMenuDiv = document.createElement("div");
        startMenuDiv.id = "start-menu";
        const startMenuItems = ["Start", "Load", "Settings"]
        for (const item of startMenuItems) {
            const itemDiv = document.createElement("div");
            itemDiv.id = `start-menu-${item.toLowerCase()}`;
            itemDiv.innerText = item;
            startMenuDiv.append(itemDiv);
        }
        const storyDiv = document.getElementById("story");
        storyDiv.append(startMenuDiv);
        startMenulisten();
    },

}

function startMenulisten() {
    const startDiv = document.getElementById("start-menu-start");
    startDiv.addEventListener("click", () => {
        gameManager.startGame();
    });
    const loadDiv = document.getElementById("start-menu-load");
    // save load system pending

    const settingsDiv = document.getElementById("start-menu-settings");
    // settings menu pending
}

export const ui = {
    startMenu: startMenu
}

// get the attached stats and set them to gameManager.stats -- pending
const backButton = document.getElementById("back");
backButton.onclick = () => {
    gameManager.deleteLastScene(gameManager.sceneTree);
    gameManager.loadLastScene(gameManager.sceneTree);
}
