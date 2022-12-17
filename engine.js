import { chapter1 } from "./chapter1.js";

export const stats = {
    magic: 100,
    strength: 100
}

startGame(); 

// FUNCTIONS 

function renderScene(label) {
    // get the scene
    const scene = getScene(label);
    // get the story div
    const storyDiv = document.getElementById("story");
    // print the scene text
    storyDiv.innerText = scene.text;
    // render the buttons
    alert(stats.magic)
    scene.choices.forEach(choice => {
        const choiceButton = document.createElement("div");
        choiceButton.id = "story-choice";
        choiceButton.innerText = choice.text;
        storyDiv.appendChild(choiceButton);
        choiceButton.addEventListener("click", (ev) => {
            choice.run();
            renderScene(choice.nextScene);
        });
    });
}

function startGame() {
    window.onload = (ev) => {
        renderScene("start");
    };
}

function getScene(label) {
    for (let i = 0; i < chapter1.length; i++) {
        if (chapter1[i].label === label) {
            return chapter1[i];
            break;
        }
        else continue;
    }
}