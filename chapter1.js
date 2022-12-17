import { stats } from "./engine.js";

export const chapter1 = [

    {
        label: "start",
        text: "You are in a dark dungeon with 3 ways to go... which way would you like to proceed ?",
        choices: [
            {
                text: " Go North",
                nextScene: "dreams",
                run: function () {
                    stats.magic = 20;
                    alert(stats.magic);
                }
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