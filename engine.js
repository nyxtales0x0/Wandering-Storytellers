const chapter1 = [

    {
        label: "start",
        text: "You are in a dark dungeon with 3 ways to go... which way would you like to proceed ?",
        choices: [
            {
                text: " Go North",
                nextScene: "dreams",
                run: function () {}
            },
            {
                text: "Go West",
                nextScene: "dreams",
                run: function () {}
            },
            {
                text: "Stay here",
                nextScene: "dreams",
                run: function () {}
            }
        ]
    },

    {
        label: "dreams",
        text: "Sorry nvm you were not inside a dungeon but inside your dearms xD",
        choices: [
            {
                text: "Get off your bed.",
                nextScene: "end",
                run: function () {}
            },
            {
                text: "Head to sleep again.",
                nextScene: "end",
                run: function () {}
            }
        ]
    },

    {
        label: "end",
        text: "Thanks for playing",
        choices: []
    }

];

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