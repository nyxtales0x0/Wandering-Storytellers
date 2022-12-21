// importing game stats
import * as stats from "@/stats.js"

// import all the chapters
// every chapter folder has it's own scene folder
// which has all of its scenes
// the scenes themselves have subscenes
// chapterFolder
//      |__scenes
//          |__main.js
//          |__scene1.js
//          |__scene2.js
import * as chapter1 from "./chapters/chapter1/scenes/index.js";

// start subscene of the tavernIntro scene of chapter 1
// is the first node of the scene tree
const sceneTree = chapter1.tavernIntro.start;

// start the game here
startGame(sceneTree);



// handle back button
const rewindButton = document.getElementById("rewind");
rewindButton.onclick = () => {
    gotoPreviousScene(sceneTree);
    renderLastNode(sceneTree);
}



// ========= Functions ========= //



// at the start of the game, sceneTree acts as the first subScene
// (start subscene of tavernIntro scene)
// render the first node of the node tree
function startGame(subScene) {
    window.onload = () => {
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
    storyTextDiv.innerText = subScene.text();
    if (subScene.hasOwnProperty("getTextInput")) {
        const textInput = document.createElement('input');
        textInput.id = "text-input";
        storyTextDiv.appendChild(textInput);
    }
    if (subScene.run) subScene.run();
}



function renderChoices(subScene) {
    const storyChoicesDiv = document.getElementById("story-choices");
    storyChoicesDiv.innerHTML = "";
    subScene.choices.forEach((choice) => {
        // basically if your choice object has hidden property then dont show it up.
        if (choice.hidden === true) { /* do nothing */ }
        else {
            // add the choice
            const choiceButton = document.createElement("div");
            choiceButton.classList.add("button", "story-choices");
            choiceButton.innerText = choice.text;
            storyChoicesDiv.appendChild(choiceButton);
            choiceButton.addEventListener("click", () => {
                if (subScene.hasOwnProperty("getTextInput")) {
                    const textInput = document.getElementById("text-input");
                    stats.set(subScene.getTextInput, textInput.value);
                }
                choice.run();
                renderScene(subScene.nextScene);
            });
        }   
    });
}



// using recursion to traverse the tree and delete the last node
function gotoPreviousScene(sceneTree) {
    if (!sceneTree.nextScene) return 1;
    else if (gotoPreviousScene(sceneTree.nextScene) === 1) {
        delete sceneTree.nextScene;
    }
}



// this needs to be called to render the last scene of the tree
// after deleting the last node by back button
function renderLastNode(sceneTree) {
    if (sceneTree.nextScene) renderLastNode(sceneTree.nextScene);
    else renderScene(sceneTree);
}