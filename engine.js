import { chapter1 } from "./chapters/chapter1.js";

export const stats = {}
export const currentChapter = chapter1;

startGame();

// ========= Functions ========= //

function startGame() {
    window.onload = (ev) => {
        renderScene("start", currentChapter);
    };
}

function renderScene(label, chapter) {
    renderText(label, chapter);
    renderChoices(label, chapter);
}

function renderText(label, chapter) {
    const scene = getScene(label, chapter);
    const storyTextDiv = document.getElementById("story-text");
    storyTextDiv.innerText = scene.text;
}

function renderChoices(label, chapter) {
    const scene = getScene(label, chapter);
    const storyChoicesDiv = document.getElementById("story-choices");
    storyChoicesDiv.innerHTML = "";
    scene.choices.forEach(choice => {
        const choiceButton = document.createElement("div");
        choiceButton.id = "story-choices";
        choiceButton.innerText = choice.text;
        storyChoicesDiv.appendChild(choiceButton);
        choiceButton.addEventListener("click", (ev) => {
            choice.run();
            renderScene(choice.goto, currentChapter);
        });
    });
}

function getScene(label, chapter) {
    for (let i = 0; i < chapter.length; i++) {
        if (chapter[i].label === label) {
            return chapter[i];
            break;
        }
        else continue;
    }
}