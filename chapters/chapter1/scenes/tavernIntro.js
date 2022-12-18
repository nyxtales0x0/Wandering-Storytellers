export const start = {
    text: `In a calm evening, as the winds grazes past you and flows along your skin, you find yourself standing in the town square of a city called Vernes, a city you recently moved into after you were released from your job as a soldier of the King's army. The town square is busy as usual making it look like the liveliest part of the city.
    
    You look at the old tavern settled on a stone foundation and can see the sun setting behind it. You take a deep sigh, all that your mind cares about right now is a nice warm loaf of bread and honey along with a mug of refreshing ale. "I deserve it after all the days work", you think to yourself.
    
    As your stomach starts to growl in excitement, you move forward and open the door of the Winter Bear Tavern, the warmth flushing at you as the door opens.
    
    "Welcome to Winter Bear's tavern young fellow."`,
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
    text: `"Welcome to Winter Bear's tavern.`,
    choices: []
}
