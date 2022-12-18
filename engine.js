// import all the chapters
// every chapter folder has it's own scene folder
// which has all of its scenes
// the scenes themselves have subscenes
// chapterFolder
//      |__scenes
//          |__main.js
//          |__scene1.js
//          |__scene2.js
import * as chapter1 from "./chapters/chapter1/scenes/main.js";

// start subscene of the tavernIntro scene of chapter 1
// is the first node of the scene tree
const sceneTree = chapter1.tavernIntro.start;

// start the game here
startGame(sceneTree);



// ========= Functions ========= //



// at the start of the game, sceneTree acts as the first subScene
// (start subscene of tavernIntro scene)
// render the first node of the node tree
function startGame(subScene) {
    window.onload = (ev) => {
        renderScene(subScene);
    };
}



// just renders the scene node
function renderScene(subScene) {
    renderText(subScene);
    renderChoices(subScene);
}



// displays the value of text property from the subScene node
function renderText(subScene) {
    const storyTextDiv = document.getElementById("story-text");
    storyTextDiv.innerText = subScene.text;
}



function renderChoices(subScene) {
    const storyChoicesDiv = document.getElementById("story-choices");
    storyChoicesDiv.innerHTML = "";
    subScene.choices.forEach((choice) => {
        const choiceButton = document.createElement("div");
        choiceButton.id = "story-choices";
        choiceButton.innerText = choice.text;
        storyChoicesDiv.appendChild(choiceButton);
        choiceButton.addEventListener("click", (ev) => {
            choice.run();
            renderScene(subScene.nextScene);
        });
    });
}
