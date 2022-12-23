export const gameManager = {
    
    sceneTree: {},

    setfirstScene(scene) {
        this.sceneTree = scene;
    },

    stats: {}, // pending
    getStat(key) {
        return this.stats[key];
    },

    setStat(key, value) {
        this.stats[key] = value
    },

    startGame() {
        const storyDiv = document.getElementById("story");
        const startMenuDiv = document.getElementById("start-menu");
        storyDiv.removeChild(startMenuDiv);
        loadScene(this.sceneTree);
    },

    deleteLastScene(sceneTree) {
        if (!sceneTree.nextScene) return 1;
        else if (this.deleteLastScene(sceneTree.nextScene) === 1) {
            delete sceneTree.nextScene;
            return 2;
        }
        else if (this.deleteLastScene(sceneTree.nextScene) === 2) {
            console.log('fire');
            loadScene(sceneTree.nextScene);
        }
    },

    loadLastScene(sceneTree) {
        if (sceneTree.hasOwnProperty("nextScene")) this.loadLastScene(sceneTree.nextScene);
        else loadScene(sceneTree)
    }

}


// attach stats to every node on scene load -- pending
function loadScene(scene) {
    handleText(scene)
    handleChoices(scene);
}

function handleText(scene) {
    const storyTextDiv = document.getElementById("story-text");
    clearElement(storyTextDiv);
    storyTextDiv.innerText = scene.text();
    if (scene.hasOwnProperty("textInput")) {
        const textInput = document.createElement("input");
        textInput.id = "text-input"
        storyTextDiv.append(textInput);
    }
    if (scene.hasOwnProperty("run")) scene.run();
}

function handleChoices(scene) {
    const storyChoicesDiv = document.getElementById("story-choices");
    clearElement(storyChoicesDiv);
    for (const choice of scene.choices) {
        if (choice.hidden === true) continue;
        const choiceButton = document.createElement("div");
        choiceButton.classList.add("story-choice", "button");
        choiceButton.innerText = choice.text();
        storyChoicesDiv.append(choiceButton);
        choiceButton.addEventListener("click", () => {
            if (scene.hasOwnProperty("textInput")) {
                const textInput = document.getElementById("text-input");
                gameManager.setStat(scene.textInput, textInput.value);
            }
            choice.run();
            loadScene(scene.nextScene);
        });
    }
}

function clearElement(htmlElement) {
    htmlElement.innerHTML = "";
}
