Just a test to delete later can you see this?
export const start = {
    text: `In a calm evening, as the winds grazes past you and flows along your skin, you find yourself standing in the town square of a city called Vernes, a city you recently moved into after you were released from your old job,The town square is busy as per usual making it look like the liveliest part of the city.
    
    You look at the old tavern settled on a stone foundation and can see the sun starting to dip behind it. You take a deep sigh, now all that your mind cares about is getting a nice warm piece of bread and honey along with a mug of refreshing ale.

    "I deserve it after all the days work" you think to yourself.

    You look at the old tavern settled on a stone foundation and can see the sun setting behind it. You take a deep sigh, all that your mind cares about right now is a nice warm loaf of bread and honey along with a mug of refreshing ale. "I deserve it after all the days work", you think to yourself.
    
    As your stomach starts to growl in excitement, you move forward and open the door of the Winter Bear's Tavern, the warmth flushing at you as the door opens.
    
    "Welcome to Winter Bear tavern laddie what will you be having t'night?" Says the bartender as you enters,the place is busling with adventurers and soldiers alike talking about their own sets of achivements, in various stages of drunkenness, it's a well reputed inn afterall,
    
    You order the bread and honey, with a pint of ale as you sit at one of the tables, She quickly came and soon enough you are enjoying your well deserved food after a long and hectic day with a mug of ale in your left hand and honey laced bread in your right.`,
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
    text: `write tavern interior description here 
    
    Seems like you will be left to your thoughts no more. You see an atheletic man with a tan skin tone, green emerald like eyes and a thick orange beard approaching towards you.
    
    "Ahh Ralf, good day old man. How's it going?"

    Ralf, the owner of the Winter Bear's tavern. Every time you come back from your quests and ventures Ralf's old tavern is the first place you visit. Ralf has become a regular sight to your eyes since you moved to Vernes. He's one of the few people you have started to get along in this new town.
    
    "Errr you know them young bloody bastards! Always makin' a mess of this place. This one laddie was fightin' with Valor over a stupid lass. Stupid dumplings have nethin better to do than fightin' in my shack."`,
    choices: [
        {
            text: `"And who's this lass by the way?"`,
            run: function() {
                helloRalf.nextScene = whosTheLass;
            }
        }
    ]
}

const whosTheLass = {
    text: ``,
    choices: []
}
