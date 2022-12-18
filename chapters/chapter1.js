export const chapter1 = [

    {
        label: "start",
        text: `It was a tough day, you nearly died but you managed to put through. After a long stressfull day all there is in your mind is a sweet piece of bread and honey and some ale to quench your thirst. \r\rYou are in a dark dungeon with 3 ways to go... which way would you like to proceed ?`,
        choices: [
            {
                text: " Go North",
                goto: "dreams",
                run: function () { }
            },
            {
                text: "Go West",
                goto: "dreams",
                run: function () { }
            },
            {
                text: "Stay here",
                goto: "dreams",
                run: function () { }
            }
        ]
    },

    {
        label: "dreams",
        text: "Sorry nvm you were not inside a dungeon but inside your dearms xD",
        choices: [
            {
                text: "Get off your bed.",
                goto: "end",
                run: function () { }
            },
            {
                text: "Head to sleep again.",
                goto: "end",
                run: function () { }
            }
        ]
    },

    {
        label: "end",
        text: "Thanks for playing",
        choices: []
    }

];