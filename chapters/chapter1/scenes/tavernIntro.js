export const start = {
    text: `It's a calm evening, wind grazing past kissing your skin, you stand in the town square of a city named Vernes, a city you recently moved to after you were freed from your job as a soldier of the King's army. The town square is busy as usual making the square look the liveliest part of the city. \r\rYou look at a old tavern settled on a stone foundation and can see the sun set behind the tavern. You take a deep sigh, all that your mind cares about right now is a nice warm piece of bread and honey and a mug of refreshing ale. "I deserve it after all the days work" you think to yourself. \r\rAs your stomach starts to grawl in excitement you move forward and open the door of the Winter Bear's Tavern, warmth flushing at you as the door opens. \r\r"Welcome to winter bear's tavern."`,
    choices: [
        {
            text: "Continue",
            run: function () {
                start.nextScene = helloRalf;
            }
        }
    ]
}

const helloRalf = {
    text: `"Welcome to winter bear's tavern.`,
    choices: []
}